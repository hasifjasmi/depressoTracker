function Balance() {
  var food = 176.01;
  var general = 1.52;
  var transport = 168.08;

  return (
    <>
      <div className="text-center">
        <h1 className="text-lg">
          <b>For Zaf*</b>
        </h1>
        <h1 className="text-xl pb-4">Your current balance:</h1>
      </div>
      <div className="flex flex-row space-x-2 justify-center pb-11">
        <div className="bg-blue-600 basis-auto p-5 rounded-md">
          Food Balance: <b>RM{food}</b>
        </div>
        <div className="bg-green-800 basis-auto p-5 rounded-md">
          General Balance : <b>RM{general}</b>
        </div>
        <div className="bg-amber-600 basis-auto p-5 rounded-md">
          Transportation Balance: <b>RM{transport}</b>
        </div>
      </div>
    </>
  );
}

export default Balance;
