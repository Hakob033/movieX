// import avengers from "../../public/banersImages/avengers.png";
// import enternals from "/public/banersImages/enternals.png";
// import venom from "/public/banersImages/venom.png";

export default function Banner() {
  return (
    <div className=" flex justify-center max-w-screen overflow-hidden ">
      <img
        src="/banersImages/enternals.png"
        alt=""
        className=" min-w-[40vw] py-4 overflow-hidden blur-[1px]"
      />
      <img
        src="/banersImages/avengers.png"
        alt=""
        className=" w-[900px] px-3 "
      />
      <img
        src="/banersImages/venom.png"
        alt=""
        className=" min-w-[40vw] overflow-hidden py-4 blur-[1px]"
      />
    </div>
  );
}
