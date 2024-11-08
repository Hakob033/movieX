import { PopularURL } from "../lib";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";

type PopularFilm = {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  vote_average: string;
};

export default function PopularFilms() {
  const { data, loading, error } = useFetch<PopularFilm>(PopularURL);

  return (
    <div className=" max-w-screen flex justify-center items-center">
      <div className="popular-films w-10/12 py-5">
        <h1 className=" text-center text-2xl py-5">Most popular</h1>
        {loading ? (
          <p>Loading popular films...</p>
        ) : error ? (
          <p>Error fetching films: {error}</p>
        ) : (
          <ul className="grid gap-4 grid-cols-2 lg:grid-cols-6 md:grid-cols-3">
            {data.slice(0, 6).map((film) => (
              <Link to={`/films/${film.id}`} key={film.id}>
                <film-card
                  key={film.id}
                  title={film.title}
                  image-url={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                  date={film.release_date}
                  vote_average={film.vote_average}
                ></film-card>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
