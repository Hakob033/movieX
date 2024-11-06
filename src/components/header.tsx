import Banner from "./banner";
import Searach from "./searach";

export default function Header() {
  return (
    <div className="flex flex-col justify-between items-center max-w-screen h-screen bg-gradient-to-r from-linearFrom to-linearTo">
      <Searach />
      <Banner />
      <div className=" flex flex-col justify-center items-center gap-4">
        <h1 className="text-customWhite text-2xl text-center">
          Your Ultimate Portal to the World of Movies
        </h1>
        <p className=" max-w-[1216px] text-customWhite text-center pb-6 mx-6">
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
