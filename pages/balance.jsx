function Balance() {
  var food = 176.01;
  var general = 1.52;
  var transport = 168.08;

  function changeColour(bal) {
    var colour;
    if (bal < 10) {
      return (colour = "bg-red-600");
    } else if (bal > 40 && bal < 110) {
      return (colour = "bg-yellow-300");
    } else {
      return (colour = "bg-green-600");
    }
  }
  var colourFood = changeColour(food);
  var colourGeneral = changeColour(general);
  var colourTransport = changeColour(transport);

  return (
    <>
      <div className="text-center">
        <h1 className="text-lg">
          <b>For Zaf*</b>
        </h1>
        <h1 className="text-xl pb-4">Your current balance:</h1>
      </div>
      {/* legend */}

      <div className="flex space-x-2 justify-center rounded-md p-4 ">
        <div className="flex flex-row">
          <div className="bg-green-600 basis-auto rounded-md w-6">&nbsp;</div>
          <div>&nbsp;means your balance is still okay</div>
        </div>
        <div className="flex flex-row">
          <div className="bg-yellow-300 basis-auto rounded-md w-6">&nbsp;</div>
          <div>&nbsp;means your balance is concerning</div>
        </div>
        <div className="flex flex-row">
          <div className="bg-red-600 basis-auto rounded-md w-6">&nbsp;</div>
          <div>&nbsp;means your balance is low af</div>
        </div>
      </div>

      {/* show balance */}
      <div className="flex flex-row space-x-2 justify-center pb-11">
        <div className={`${colourFood} basis-auto p-5 rounded-md`}>
          Food Balance: <b>RM{food}</b>
        </div>
        <div className={`${colourGeneral} basis-auto p-5 rounded-md`}>
          General Balance : <b>RM{general}</b>
        </div>
        <div className={`${colourTransport} basis-auto p-5 rounded-md`}>
          Transportation Balance: <b>RM{transport}</b>
        </div>
      </div>
    </>
  );
}

export default Balance;
