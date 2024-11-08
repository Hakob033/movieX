import { useEffect, useState } from "react";
import { API_KEY } from "../lib";
import { Link } from "react-router-dom";

type SimiliarProps = {
  filmId?: string;
};

type Similiar = {
  id: number;
  title: string;
  release_date: string;
  backdrop_path: string;
  vote_average: string;
};

type Data = {
  results: Similiar[];
};

export default function Similiar({ filmId }: SimiliarProps) {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    if (filmId) {
      fetch(
        `https://api.themoviedb.org/3/movie/${filmId}/recommendations?api_key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((response) => {
          setData(response);
        })
        .catch((error) => {
          console.error("Error fetching similar movies:", error);
        });
    }
  }, [filmId]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 my-5 flex flex-col justify-center items-center">
      <h2 className="text-2xl text-center font-bold my-4">Similar Movies</h2>
      <div className=" w-11/12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {data.results.slice(0, 6).map((movie) => (
          <Link to={`/films/${movie.id}`} key={movie.id}>
            <film-card
              key={movie.id}
              title={movie.title}
              image-url={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              date={movie.release_date}
              vote_average={movie.vote_average}
            ></film-card>
          </Link>
        ))}
      </div>
    </div>
  );
}
