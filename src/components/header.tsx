import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Banner from "./banner";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-col justify-between items-center max-w-screen h-screen bg-gradient-to-r from-linearFrom to-linearTo">
      <div className="flex justify-between items-center w-10/12 py-2">
        <div className=" flex items-center">
          <Link to="/">
            <p className=" text-customWhite text-3xl w-[120px] h-[40px]">
              Movie<span className="text-customPurple text-4xl">X</span>
            </p>
          </Link>
        </div>
        <div className=" flex items-center justify-between w-[390px] h-[40px]">
          <form
            action=""
            className=" relative w-[280px] flex items-center justify-center"
          >
            <input
              type="text"
              className=" w-[280px] h-[40px] rounded-full bg-transparent text-customWhite border-2 outline-none pb-[5px] pl-7"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="text-customWhite absolute left-2 top-auto"
            />
          </form>
          <button className=" h-[40px] w-[98px] rounded-full bg-customPurple text-customWhite">
            Search
          </button>
        </div>
      </div>
      <Banner />
      <div className=" flex flex-col justify-center items-center gap-4">
        <h1 className="text-customWhite text-2xl">
          Your Ultimate Portal to the World of Movies
        </h1>
        <p className=" max-w-[1216px] text-customWhite text-center pb-6">
          Welcome to your ultimate movie destination! Dive deep into a world of
          cinematic wonders with our comprehensive platform. Whether you're a
          passionate cinephile or just looking for your next movie night pick,
          we've got you covered. Explore detailed reviews, watch the latest
          trailers, and gain exclusive insights into the movie industry.{" "}
        </p>
      </div>
    </div>
  );
}
