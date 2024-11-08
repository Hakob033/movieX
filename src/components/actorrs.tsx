import "../../node_modules/swiper/swiper.css";

import { API_KEY } from "../lib";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

type ActorrsProps = {
  filmId?: string;
};

type Actor = {
  id: number;
  name: string;
  profile_path: string;
  character: string;
};

type Data = {
  cast: Actor[];
};

export default function Actorrs({ filmId }: ActorrsProps) {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    if (filmId) {
      fetch(
        `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [filmId]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className=" max-w-screen text-center text-3xl p-5">Cost</h2>
      <div className=" flex  justify-center">
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper w-11/12"
          breakpoints={{
            200: {
              slidesPerView: 2,
            },
            550: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {data.cast.slice(0, 50).map((actor) => (
            <SwiperSlide
              key={actor.id}
              className="flex justify-center items-center"
            >
              <div className="bg-white flex flex-col justify-center items-center rounded-lg shadow-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  className="w-full h-56 rounded-lg object-cover"
                />
                <h2 className="mt-4 text-sm font-bold">{actor.name}</h2>
                <h2 className="mt-1 text-xs font-bold">{actor.character}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
