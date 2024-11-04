import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="max-w-screen bg-myPurple flex justify-center items-center">
      <div className=" w-10/12 flex justify-between py-2 ">
        <div className=" flex">
          <div className=" flex justify-center items-center ">
            <FontAwesomeIcon
              icon={faInstagram}
              className=" p-2 text-customWhite text-2xl"
            />
          </div>
          <div className=" flex justify-center items-center ">
            <FontAwesomeIcon
              icon={faTelegram}
              className=" p-2 text-customWhite text-2xl"
            />
          </div>
          <div className=" flex justify-center items-center ">
            <FontAwesomeIcon
              icon={faFacebook}
              className=" p-2 text-customWhite text-2xl"
            />
          </div>
        </div>
        <div className=" flex items-center">
          <p className=" text-customWhite text-3xl w-[120px] h-[40px]">
            Movie<span className="text-customPurple text-4xl">X</span>
          </p>
        </div>
      </div>
    </div>
  );
}
