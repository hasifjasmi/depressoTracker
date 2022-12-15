import formatDistanceStrict from "date-fns/formatDistanceStrict";
// import * as firebase from "firebase-admin";
import startOfToday from "date-fns/startOfToday";
import { useEffect } from "react";
// import { google } from "googleapis";
// import keys from "../keys.json";
// import amount from "./admin";

// useEffect(() => {
// const { google, google } = require("googleapis");
// const keys = require("../keys.json");

//
// const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

// const client = new google.auth.JWT(
//   keys.client_email,
//   null,
//   keys.private_key,
//   SCOPES
// );

// client.authorize(function (err, tokens) {
//   if (err) {
//     console.log("fail lol");
//     return;
//   } else {
//     console.log("Connected!");
//     gsrun(client);
//   }
// });

// async function gsrun(cl) {
//   const gsapi = google.sheets({ version: "v4", auth: cl });

//   const opt = {
//     spreadsheetId: "1nfx_9ZCbyZ2I0EYW32qaIP2tSKL9HM8T5Do1HMdGj_0",
//     range: "G7:I10",
//   };

//   let data = await gsapi.spreadsheets.values.get(opt);
//   function getAmount() {
//     var dataArray = data.data.values;
//     var food = dataArray[0][2];
//     var general = dataArray[1][2];
//     var transport = dataArray[2][2];
//     var total = dataArray[3][2];
//     var amount = {
//       food: food,
//       general: general,
//       transport: transport,
//       total: total,
//     };
//     return amount;
//   }
// }
// }, []);

// var jumlah = getAmount();

var MasDate = startOfToday();

var month = MasDate.getMonth();

var calc = formatDistanceStrict(
  new Date(2022, month, MasDate.getDate()),
  new Date(2022, 9, 14),
  { unit: "day" }
);

// console.log(calc);

var str = calc;
var days = str.match(/(\d+)/);
var numDays = days[0];

function Balance({ total }) {
  var firstElement;
  if (total !== undefined) {
    firstElement = total[0];
  } else {
    firstElement = 2123;
  }

  let balance = {
    food: firstElement,
    general: 1,
    transport: 2,
    totalspend: 3,
  };

  console.log(total);

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
  var colourFood = changeColour(balance.food);
  var colourGeneral = changeColour(balance.general);
  var colourTransport = changeColour(balance.transport);

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
            Food Balance: <b>RM{balance.food}</b>
          </div>
          <div className={`${colourGeneral} basis-auto p-5 rounded-md`}>
            General Balance: <b>RM{balance.general}</b>
          </div>
          <div className={`${colourTransport} basis-auto p-5 rounded-md`}>
            Transportation Balance: <b>RM{balance.transport}</b>
          </div>
        </div>
        {/* total */}
        <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-5 w-[200px]">
          <h1 className="text-center font-mono">
            <p>
              {" "}
              Total spent for {numDays} days: {balance.totalspend}
            </p>
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
  // }, []);
}
// export async function getServerSideProps() {
//   const req = await fetch("http://localhost:3000/api/sheet");
//   const res = await req.json();

//   return {
//     props: {
//       sheetdata: res.data,
//     },
//   };
// }

export default Balance;
