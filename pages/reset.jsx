import React from "react";

export default function dome() {
  const audioRef = React.useRef();

  function handleClick() {
    audioRef.current.play();
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/kelik.mp3" />
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-6 bg-gradient-to-r from-[#6EB869] to-[#61C5B4]">
        <div
          onClick={handleClick}
          className="button w-[600px] h-[300px] bg-red-600 rounded-lg cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#a10a0a,0_0px_0_0_#a10a0a] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#a10a0a,0_15px_0_0_#a10a0a] border-b-[1px] border-red-400"
        >
          {" "}
          <span className="flex flex-col justify-center items-center h-full text-white font-bold text-[100px]">
            RESET
          </span>
        </div>
      </div>
    </>
  );
}
