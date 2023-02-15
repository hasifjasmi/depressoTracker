import Image from "next/image";
import { useState } from "react";

function counter() {
  const [player, setPlayer] = useState("");
  const [amount, setamount] = useState("");
  const [balik, setBalik] = useState(0);

  const handlePlayer = (event) => {
    setPlayer(event.target.value);
  };
  const handleAmount = (event) => {
    setamount(event.target.value);
  };

  const handleBalik = (event) => {
    setBalik(event.target.value);
  };

  function displayValue() {
    const display = amount / player;
    return isNaN(display) ? 0 : display;
  }
  const formattedNumber = parseFloat(displayValue()).toFixed(2);

  // h
  const sorangbayar = parseFloat(formattedNumber / 2).toFixed(2);
  const totalamountbalikawal = sorangbayar * balik;

  const amountlatest = amount - totalamountbalikawal;
  console.log(amountlatest);
  function latestformat() {
    const latestformattednumber = parseFloat(
      amountlatest / (player - balik)
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
              <label htmlFor="">balik awal:</label>
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
              <input
                type="number"
                placeholder="orang balik awal"
                className="border border-black max-w-[180px] ml-5 pl-2"
                value={balik}
                onChange={handleBalik}
              />
            </div>
          </div>
          <h2 className="flex-none text-center mt-4">
            the amount that everyone need to pay: <br></br>RM
            {formattedNumber}
          </h2>
          <br></br>
          <div className="text-center">
            <h2 className="text-center">
              tapi {balik} orang nak main separuh masa jadi diorang bayar: RM
              {sorangbayar}
            </h2>
            <br />
            <h2>jadi amount baru untuk</h2>
            <h2>orang lain kena bayar: RM{latestformat()}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default counter;
