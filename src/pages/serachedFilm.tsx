import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY } from "../lib";
import Footer from "../components/footer";
import Search from "../components/searach";
import NoResults from "../components/noResults";

export default function SearchedFilm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const [films, setFilms] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFilms(data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching films:", error);
          setIsLoading(false);
        });
    }
  }, [query]);

  // If films array is empty and not loading, show "No Results" message or component
  if (!isLoading && films.length === 0) {
    return <NoResults />;
  }

  return (
    <div>
      <div className="max-w-screen bg-linearFrom flex justify-center">
        <Search />
      </div>
      <div className="max-w-screen flex flex-col justify-center items-center mb-10">
        <h1 className="text-3xl text-center my-7">Search result</h1>
        <div className="w-11/12 grid gap-4 grid-cols-2 lg:grid-cols-6 md:grid-cols-3">
          {films.slice(0, 18).map((film) => {
            return (
              <Link to={`/films/${film.id}`} key={film.id}>
                <film-card
                  title={film.title}
                  image-url={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                  date={film.release_date}
                  vote_average={film.vote_average}
                ></film-card>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
