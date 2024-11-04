import { RatedURL } from "../lib";
import useFetch from "../hook/useFetch";
import Card from "./card";

interface Film {
  id: number;
  title: string;
  poster_path: string;
}

export default function MostRated() {
  const { data, loading, error } = useFetch<Film>(RatedURL);

  return (
    <div className=" max-w-screen flex justify-center items-center">
      <div className="popular-films w-10/12 py-5">
        <h1 className=" text-center text-2xl py-5">Most rated</h1>
        {loading ? (
          <p>Loading popular films...</p>
        ) : error ? (
          <p>Error fetching films: {error}</p>
        ) : (
          <ul className="grid grid-cols-6 gap-4">
            {data.slice(0, 6).map((film) => (
              <Card
                key={film.id}
                title={film.title}
                imageUrl={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
