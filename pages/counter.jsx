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
      <div className="align-middle content-center justify-center mt-[10em]">
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
        <h2 className="flex-none text-center">
          the amount that everyone needs to pay is: RM{formattedNumber}
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
    </>
  );
}

export default counter;
