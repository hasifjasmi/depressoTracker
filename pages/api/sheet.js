import { google } from "googleapis";
import keys from "../../keys.json";

export default function handler(req, res) {
    try {
        const client = new google.auth.JWT(
            keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});

            //CUSTOMIZATION FROM HERE
            const opt = {
                spreadsheetId: '1nfx_9ZCbyZ2I0EYW32qaIP2tSKL9HM8T5Do1HMdGj_0',
                range: 'K7:K10'
            };

            let data = await gsapi.spreadsheets.values.get(opt);
            return res.status(400).send(JSON.stringify({error: false, data: data.data.values}));
        });
    } catch (e) {
        return res.status(400).send(JSON.stringify({error: true, message: e.message}));
    }
}

// // import { google } from "googleapis";
// // import keys from "../keys.json";
// // import { useEffect } from "react";


// // const {google} = require('googleapis');
// // const keys = require('../keys.json');

// // // 
// // const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

// //   const client = new google.auth.JWT(
// //     keys.client_email, 
// //     null, 
// //     keys.private_key, 
// //     SCOPES
// //     );
  
// //   client.authorize(function (err, tokens) {
// //     if (err) {
// //       console.log("fail lol");
// //       return;
// //     } else {
// //       console.log('Connected!');
// //       gsrun(client);
// //     }
// //   }); 

// //   async function gsrun(cl){
// //     const gsapi = google.sheets({version:'v4', auth: cl });

// //     const opt = {
// //       spreadsheetId: '1nfx_9ZCbyZ2I0EYW32qaIP2tSKL9HM8T5Do1HMdGj_0',
// //       range: 'G7:I10'

// //     };

// //     let data = await gsapi.spreadsheets.values.get(opt);
// //     let dataArray = data.data.values;
// //     let food = dataArray[0][2];
// //     let general = dataArray[1][2];
// //     let transport = dataArray[2][2];
// //     let total = dataArray[3][2];
// //     let amount = {
// //       food: food,
// //       general: general,
// //       transport: transport,
// //       total: total
// //     }

// //     console.log("food: " + food);
// //     console.log("general: " + general);
// //     console.log("tranport: " + transport);
// //     console.log("total: " + total);
// //   }

// //   export amount;
  


