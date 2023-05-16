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

  const [colour1, setColour1] = useState("green-500");
  const [colour2, setColour2] = useState("green-500");
  const [colour3, setColour3] = useState("green-500");
  const [colour4, setColour4] = useState("green-500");

  const colourchange1 = () => {
    if (counter1 >= 9) {
      setColour1("lime-500");
    }
    if (counter1 >= 19) {
      setColour1("yellow-500");
    }
    if (counter1 >= 29) {
      setColour1("amber-500");
    }
    if (counter1 >= 39) {
      setColour1("orange-500");
    }
    if (counter1 >= 44) {
      setColour1("red-600");
    }
  };
  const colourchange2 = () => {
    if (counter2 >= 9) {
      setColour2("lime-500");
    }
    if (counter2 >= 19) {
      setColour2("yellow-500");
    }
    if (counter2 >= 29) {
      setColour2("amber-500");
    }
    if (counter2 >= 39) {
      setColour2("orange-500");
    }
    if (counter2 >= 44) {
      setColour2("red-600");
    }
  };
  const colourchange3 = () => {
    if (counter3 >= 9) {
      setColour3("lime-500");
    }
    if (counter3 >= 19) {
      setColour3("yellow-500");
    }
    if (counter3 >= 29) {
      setColour3("amber-500");
    }
    if (counter3 >= 39) {
      setColour3("orange-500");
    }
    if (counter3 >= 44) {
      setColour3("red-600");
    }
  };
  const colourchange4 = () => {
    if (counter4 >= 9) {
      setColour4("lime-500");
    }
    if (counter4 >= 19) {
      setColour4("yellow-500");
    }
    if (counter4 >= 49) {
      setColour4("amber-500");
    }
    if (counter4 >= 39) {
      setColour4("orange-500");
    }
    if (counter4 >= 44) {
      setColour4("red-600");
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/kelik.mp3" />
      <div className="">
        <div className="grid grid-rows-2 grid-cols-2  text-xl h-full w-full ">
          <div className={`border text-center bg-${colour1}`}>
            <span className="">player 1</span>
            <div>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter1(counter1 - counter1);
                  setColour1("green-500");
                }}
              >
                RESET
              </button>
            </div>
            <div className="mt-20 mb-20 text-lg">
              <span className="btn btn-outline">{counter1}</span>
            </div>
            <div className=" flex place-content-center mb-10 gap-1">
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter1(counter1 + 5);
                  colourchange1();
                }}
              >
                +5
              </button>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter1(counter1 + 1);
                  colourchange1();
                }}
              >
                +1
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
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter1(counter1 - 5);
                  colourchange1();
                }}
              >
                -5
              </button>
            </div>
          </div>

          <div className={`border text-center bg-${colour2} `}>
            <span className="">player 2</span>
            <div>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter2(counter2 - counter2);
                  setColour2("green-500");
                }}
              >
                RESET
              </button>
            </div>
            <div className="mt-20 mb-20 text-lg">
              <span className="btn btn-outline">{counter2}</span>
            </div>
            <div className="flex place-content-center gap-1">
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter2(counter2 + 5);
                  colourchange2();
                }}
              >
                +5
              </button>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter2(counter2 + 1);
                  colourchange2();
                }}
              >
                +1
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
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter2(counter2 - 5);
                  colourchange2();
                }}
              >
                -5
              </button>
            </div>
          </div>

          <div className={`border text-center bg-${colour3} `}>
            <span className="">player 3</span>
            <div>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter3(counter3 - counter3);
                  setColour3("green-500");
                }}
              >
                RESET
              </button>
            </div>
            <div className="mt-20 mb-20 text-lg">
              <span className="btn btn-outline">{counter3}</span>
            </div>
            <div className="button flex place-content-center gap-1">
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter3(counter3 + 5);
                  colourchange3();
                }}
              >
                +5
              </button>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter3(counter3 + 1);
                  colourchange3();
                }}
              >
                +1
              </button>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter3(counter3 - 1);
                  colourchange3();
                }}
              >
                -1
              </button>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter3(counter3 - 5);
                  colourchange3();
                }}
              >
                -5
              </button>
            </div>
          </div>

          <div className={`border text-center bg-${colour4} `}>
            <span className="">player 4</span>
            <div>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter4(counter4 - counter4);
                  setColour4("green-500");
                }}
              >
                RESET
              </button>
            </div>
            <div className="mt-20 mb-20 text-lg">
              <span className="btn btn-outline">{counter4}</span>
            </div>
            <div className="button flex place-content-center gap-1">
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter4(counter4 + 5);
                  colourchange4();
                }}
              >
                +5
              </button>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter4(counter4 + 1);
                  colourchange4();
                }}
              >
                +1
              </button>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter4(counter4 - 1);
                  colourchange4();
                }}
              >
                -1
              </button>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCounter4(counter4 - 5);
                  colourchange4();
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
