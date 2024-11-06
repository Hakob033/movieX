import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { API_KEY } from "../lib";
import Searach from "../components/searach";

type Film = {
  id: string;
  key: string;
  type: string;
};

export default function FilmPage() {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetch<Film>(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
  );

  const video = data.filter((val) => {
    return val.type === "Trailer";
  });

  return (
    <>
      {loading ? (
        <p>Loading popular films...</p>
      ) : error ? (
        <p>Error fetching films: {error}</p>
      ) : (
        <div className="flex flex-col justify-between items-center max-w-screen min-h-screen bg-gradient-to-r from-linearFrom to-linearTo">
          <Searach />
          <div className="video-container flex justify-center items-center">
            <iframe
              width="960px"
              height="520px"
              src={`https://www.youtube.com/embed/${video[0].key}`}
              title="Film Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
