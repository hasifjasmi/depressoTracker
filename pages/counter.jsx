import Image from "next/image";
import { useState } from "react";

function counter() {
  const [player, setPlayer] = useState("");
  const [amount, setamount] = useState("");

  const handlePlayer = (event) => {
    setPlayer(event.target.value);
  };
  const handleAmount = (event) => {
    setamount(event.target.value);
  };

  function displayValue() {
    const display = amount / player;
    return isNaN(display) ? 0 : display;
  }
  const formattedNumber = parseFloat(displayValue()).toFixed(2);

  // h
  const hasifbayar = parseFloat(formattedNumber / 2).toFixed(2);

  const amountlatest = amount - hasifbayar;
  console.log(amountlatest);
  function latestformat() {
    const latestformattednumber = parseFloat(
      amountlatest / (player - 1)
    ).toFixed(2);
    return isNaN(latestformattednumber) ? "0.00" : latestformattednumber;
  }

  return (
    <>
      <div className="flex flex-col mt-[9em]">
        <div className="flex justify-center ">
          <div className="">
            <Image
              src={"/badminton.png"}
              width={100}
              height={50}
              className={"max-w-[90%] "}
              //   layout="responsive"
            />
          </div>
          <div className="pt-5">
            <Image
              src={"/credence.png"}
              width={200}
              height={50}
              className={"max-w-[90%]"}
              // layout="responsive"
            />
          </div>
        </div>

        <div className="align-middle content-center justify-center p-7">
          <div className="flex flex-row items-center text-center place-content-center">
            <div className="flex flex-col">
              <label htmlFor="">players:</label>
              <label htmlFor="">amount:</label>
            </div>
            <div className="flex flex-col">
              <input
                className="border border-black max-w-[180px] ml-5 pl-2"
                placeholder="enter total player"
                type="number"
                value={player}
                onChange={handlePlayer}
              />
              <input
                type="number"
                placeholder="enter total amount"
                className="border border-black max-w-[180px] ml-5 pl-2"
                value={amount}
                onChange={handleAmount}
              />
            </div>
          </div>
          <h2 className="flex-none text-center mt-4">
            the amount that everyone needs to pay is: <br></br>RM
            {formattedNumber}
          </h2>
          <br></br>
          <div className="text-center">
            <h2 className="text-center">
              tapi hasif nak main separuh masa jadi dia bayar: RM{hasifbayar}
            </h2>
            <br />
            <h2>jadi amount baru untuk semua adalah:</h2>
            <h2>orang lain bayar:RM{latestformat()}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default counter;
