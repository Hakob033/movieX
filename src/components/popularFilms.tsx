import { PopularURL } from "../lib";
import useFetch from "../hook/useFetch";
import Card from "./card";

interface Film {
  id: number;
  title: string;
  poster_path: string;
}

export default function PopularFilms() {
  const { data, loading, error } = useFetch<Film>(PopularURL);

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
