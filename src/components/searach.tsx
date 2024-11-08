import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (searchQuery.trim()) {
        window.location.href = `/searchedFilm?query=${encodeURIComponent(
          searchQuery
        )}`;
      }
    }
  };

  return (
    <div className="flex gap-3 flex-col sm:flex-row justify-between items-center w-11/12 sm:w-10/12 py-2 bg-transparent">
      <div className="flex items-center">
        <Link to="/">
          <p className="text-customWhite text-3xl w-[120px] h-[40px]">
            Movie<span className="text-customPurple text-4xl">X</span>
          </p>
        </Link>
      </div>
      <div className="flex items-center justify-between w-[390px] h-[40px]">
        <form className="relative w-[280px] flex items-center justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-[280px] h-[40px] rounded-full bg-transparent text-customWhite border-2 outline-none pb-[5px] pl-7"
            placeholder="Search movies..."
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="text-customWhite absolute left-2 top-auto"
          />
        </form>

        <Link
          to={`/searchedFilm?query=${encodeURIComponent(
            searchQuery.replace(/\s+/g, " ")
          )}`}
          className="h-[40px] w-[98px] rounded-full bg-customPurple text-customWhite flex justify-center items-center"
        >
          Search
        </Link>
      </div>
    </div>
  );
}
