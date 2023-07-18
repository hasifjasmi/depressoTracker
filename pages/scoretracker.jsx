import React, { useEffect, useState } from "react";

export default function dome() {
  const audioRef = React.useRef();

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full lg:max-w-screen-lg mx-auto">
        {/* blue side */}
        <div class="flex flex-col w-full lg:w-1/2">
          <div class="flex self-center gap-6">
            <button
              className="btn btn-sm w-16 "
              onClick={() => {
                setCounter1(counter1 - counter1);
                setColour1("green-500");
              }}
            >
              RESET
            </button>
            <button
              className="btn btn-sm"
              onClick={() => {
                setCounter1(counter1 - 1);
                colourchange1();
              }}
            >
              -1
            </button>
          </div>

          <button
            className={`h-screen text-center bg-blue-500`}
            onClick={() => {
              setCounter1(counter1 + 1);
            }}
          >
            <div className="flex flex-col items-center">
              <input
                className="text-center text-4xl bg-transparent placeholder-black"
                placeholder="Player 1"
                type="text"
              />
            </div>

            <div className="mt-20 mb-20 text-lg text-gray-900">
              <p className="text-9xl">{counter1}</p>
            </div>

            <div className=" flex place-content-center mb-10 gap-1"></div>
          </button>
        </div>

        {/* red side */}
        <div class="flex flex-col w-full lg:w-1/2">
          <div class="flex self-center gap-6">
            <button
              className="btn btn-sm w-16 "
              onClick={() => {
                setCounter2(counter2 - counter2);
                colourchange2("green-500");
              }}
            >
              RESET
            </button>
            <button
              className="btn btn-sm"
              onClick={() => {
                setCounter2(counter2 - 1);
                colourchange2();
              }}
            >
              -1
            </button>
          </div>

          <button
            className={`min-h-screen text-center bg-red-500`}
            onClick={() => {
              setCounter2(counter2 + 1);
            }}
          >
            <div className="flex flex-col items-center">
              <input
                className="text-center text-4xl bg-transparent placeholder-black"
                placeholder="Player 2"
                type="text"
              />
            </div>

            <div className="mt-20 mb-20 text-lg text-gray-900">
              <p className="text-9xl">{counter2}</p>
            </div>

            <div className=" flex place-content-center mb-10 gap-1"></div>
          </button>
        </div>
      </div>
    </>
  );
}
