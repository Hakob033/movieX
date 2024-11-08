import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./footer";
import Search from "./searach";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function NoResults() {
  return (
    <div className=" ">
      <div className="flex bg-linearFrom justify-center">
        <Search />
      </div>
      <div className="flex flex-col items-center justify-center h-96 my-28">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className=" text-5xl text-linearTo p-4"
        />
        <p className="text-center">
          Unfortunately, search on the site did not give any results. Try to
          change or shorten your request.
        </p>
      </div>
      <Footer />
    </div>
  );
}
