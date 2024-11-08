import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { API_KEY } from "../lib";
import Searach from "../components/searach";
import { useEffect, useState } from "react";
import Actorrs from "../components/actorrs";
import Similiar from "../components/similiar";

type Video = {
  id: string;
  key: string;
  type: string;
  movieId: string;
};
type filmDetails = {
  original_title: string;
  release_date: string;
  overview: string;
};

export default function FilmPage() {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetch<Video>(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
  );

  const [filmDetails, setFilmDetails] = useState<filmDetails | null>(null);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => setFilmDetails(res));
  }, []);

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
        <>
          <div className="flex flex-col justify-between items-center max-w-screen min-h-screen bg-gradient-to-r from-linearFrom to-linearTo">
            <Searach />
            <div className="video-container w-full sm:w-4/6 h-auto flex justify-center items-center p-4">
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video[0].key}?controls=0&modestbranding=1&rel=0`}
                  title="Film Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center gap-1">
              <div className=" flex justify-center items-center gap-7">
                <h2 className=" text-customWhite  text-2xl text-center ">
                  {filmDetails?.original_title}
                </h2>
                <p className=" text-customWhite text-2xl">
                  ({filmDetails?.release_date.split("-")[0]})
                </p>
              </div>
              <p className=" text-customWhite text-center overflow-hidden text-ellipsis line-clamp-2 h-16 w-11/12 p-3">
                {filmDetails?.overview}
              </p>
            </div>
          </div>
          <div className="">
            <Actorrs filmId={id} />
            <Similiar filmId={id} />
          </div>
        </>
      )}
    </>
  );
}
