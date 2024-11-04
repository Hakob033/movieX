import { useEffect, useState } from "react";
import { PopularURL } from "../lib";
import Card from "./card";

interface Film {
  id: number;
  title: string;
  poster_path: string;
}

export default function PopularFilms() {
  const [data, setData] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPopularFilms = async () => {
      try {
        const response = await fetch(PopularURL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.results || []);
      } catch (error) {
        console.error("Failed to fetch popular films:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularFilms();
  }, []);

  return (
    <div className="popular-films p-5">
      <h1 className=" text-center text-2xl p-3">Most Popular</h1>
      {loading ? (
        <p>Loading popular films...</p>
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
  );
}
