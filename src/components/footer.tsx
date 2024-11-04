import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="max-w-screen bg-myPurple flex justify-center items-center">
      <div className=" w-10/12 flex justify-between py-2 ">
        <div className=" flex">
          <div className=" flex justify-center items-center ">
            <a href="https://www.instagram.com/" target="blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className=" p-2 text-customWhite text-2xl"
              />
            </a>
          </div>
          <div className=" flex justify-center items-center ">
            <a href="https://web.telegram.org" target="blank">
              <FontAwesomeIcon
                icon={faTelegram}
                className=" p-2 text-customWhite text-2xl"
              />
            </a>
          </div>
          <div className=" flex justify-center items-center ">
            <a href="https://www.facebook.com/?locale=ru_RU" target="blank">
              <FontAwesomeIcon
                icon={faFacebook}
                className=" p-2 text-customWhite text-2xl"
              />
            </a>
          </div>
        </div>
        <div className=" flex items-center">
          <Link to="/">
            <p className=" text-customWhite text-3xl w-[120px] h-[40px]">
              Movie<span className="text-customPurple text-4xl">X</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
