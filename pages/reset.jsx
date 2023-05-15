import React, { useState } from "react";

export default function dome() {
  const audioRef = React.useRef();

  function handleClick() {
    audioRef.current.play();
  }

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  const [colour, setColour] = useState("red");

  const colourchange = () => {
    if (counter1 || counter2 || counter3 || counter4 >= 10) {
      setColour("orange");
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/kelik.mp3" />
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-6 bg-gradient-to-r from-[#6EB869] to-[#61C5B4]">
        <div className="grid grid-rows-2 grid-cols-2 gap-10 text-xl">
          <div className={`border text-center bg-${colour}-600 w-96`}>
            <span className="">player 1</span>
            <div>
              <button
                onClick={() => {
                  setCounter1(counter1 - counter1);
                }}
              >
                RESET
              </button>
            </div>
            <div className="mt-10 mb-10 text-lg">
              <span className="">{counter1}</span>
            </div>
            <div className="button flex place-content-center gap-5">
              <button
                onClick={() => {
                  setCounter1(counter1 + 5);
                }}
              >
                +5
              </button>
              <button
                onClick={() => {
                  setCounter1(counter1 + 1);
                }}
              >
                +1
              </button>
              <button
                onClick={() => {
                  setCounter1(counter1 - 1);
                }}
              >
                -1
              </button>
              <button
                onClick={() => {
                  setCounter1(counter1 - 5);
                }}
              >
                -5
              </button>
            </div>
          </div>

          <div className={`border text-center bg-${colour}-600 w-96`}>
            <span className="">player 2</span>
            <div>
              <button
                onClick={() => {
                  setCounter2(counter2 - counter2);
                }}
              >
                RESET
              </button>
            </div>
            <div className="mt-10 mb-10 text-lg">
              <span onChange={colourchange}>{counter2}</span>
            </div>
            <div className="button flex place-content-center gap-5">
              <button
                onClick={() => {
                  setCounter2(counter2 + 5);
                }}
              >
                +5
              </button>
              <button
                onClick={() => {
                  setCounter2(counter2 + 1);
                }}
              >
                +1
              </button>
              <button
                onClick={() => {
                  setCounter2(counter2 - 1);
                }}
              >
                -1
              </button>
              <button
                onClick={() => {
                  setCounter2(counter2 - 5);
                }}
              >
                -5
              </button>
            </div>
          </div>

          <div className="border text-center border-red-600 w-96">
            <span className="">player 3</span>
            <div>
              <button
                onClick={() => {
                  setCounter3(counter3 - counter3);
                }}
              >
                RESET
              </button>
            </div>
            <div className="mt-10 mb-10 text-lg">
              <span className="">{counter3}</span>
            </div>
            <div className="button flex place-content-center gap-5">
              <button
                onClick={() => {
                  setCounter3(counter3 + 5);
                }}
              >
                +5
              </button>
              <button
                onClick={() => {
                  setCounter3(counter3 + 1);
                }}
              >
                +1
              </button>
              <button
                onClick={() => {
                  setCounter3(counter3 - 1);
                }}
              >
                -1
              </button>
              <button
                onClick={() => {
                  setCounter3(counter3 - 5);
                }}
              >
                -5
              </button>
            </div>
          </div>
          <div className="border text-center border-red-600 w-96">
            <span className="">player 4</span>
            <div>
              <button
                onClick={() => {
                  setCounter4(counter4 - counter4);
                }}
              >
                RESET
              </button>
            </div>
            <div className="mt-10 mb-10 text-lg">
              <span className="">{counter4}</span>
            </div>
            <div className="button flex place-content-center gap-5">
              <button
                onClick={() => {
                  setCounter4(counter4 + 5);
                }}
              >
                +5
              </button>
              <button
                onClick={() => {
                  setCounter4(counter4 + 1);
                }}
              >
                +1
              </button>
              <button
                onClick={() => {
                  setCounter4(counter4 - 1);
                }}
              >
                -1
              </button>
              <button
                onClick={() => {
                  setCounter4(counter4 - 5);
                }}
              >
                -5
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
