import formatDistanceStrict from "date-fns/formatDistanceStrict";
import startOfToday from "date-fns/startOfToday";

var MasDate = startOfToday();

var month = MasDate.getMonth();

var calc = formatDistanceStrict(
  new Date(2022, month, MasDate.getDate()),
  new Date(2022, 9, 14),
  { unit: "day" }
);

console.log(calc);

var str = calc;
var days = str.match(/(\d+)/);
var numDays = days[0];

function Balance() {
  var food = 114.61;
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
      <div className="grid grid-cols-1 gap-3 justify-items-center content-evenly pb-11">
        <div className="pt-5 text-center">
          <h1 className="text-lg">
            <b>For Zaf*</b>
          </h1>
          <h1 className="text-xl">Your current balance:</h1>
        </div>
        {/* legend */}

        <div className="flex flex-wrap space-x-2 justify-center md:content-start rounded-md md:flex-wrap">
          <div className="flex flex-row ">
            <div className="bg-green-600 basis-auto rounded-md w-6">&nbsp;</div>
            <div>&nbsp;means your balance is still okay</div>
          </div>
          <div className="flex flex-row">
            <div className="bg-yellow-300 basis-auto rounded-md w-6">
              &nbsp;
            </div>
            <div>&nbsp;means your balance is concerning</div>
          </div>
          <div className="flex flex-row">
            <div className="bg-red-600 basis-auto rounded-md w-6">&nbsp;</div>
            <div>&nbsp;means your balance is low af</div>
          </div>
        </div>

        {/* show balance */}
        <div className="flex flex-row space-x-2 justify-center ">
          <div className={`${colourFood} basis-auto p-5 rounded-md`}>
            Food Balance: <b>RM{food}</b>
          </div>
          <div className={`${colourGeneral} basis-auto p-5 rounded-md`}>
            General Balance: <b>RM{general}</b>
          </div>
          <div className={`${colourTransport} basis-auto p-5 rounded-md`}>
            Transportation Balance: <b>RM{transport}</b>
          </div>
        </div>
        {/* total */}
        <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-5 w-[200px]">
          <h1 className="text-center font-mono">
            <p> Total spent for {numDays} days: RM 903.79</p>
          </h1>
        </div>
        <button>
          <a
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1nfx_9ZCbyZ2I0EYW32qaIP2tSKL9HM8T5Do1HMdGj_0/edit?usp=sharing"
          >
            {" "}
            Click me to see the full detail
          </a>
        </button>
      </div>
    </>
  );
}

export default Balance;
