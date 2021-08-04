const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const cors = require('cors')({ origin: true });
// import functions from firebase-functions

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// export const aggregate = functions.https.onCall(...
exports.aggregate = functions.https.onCall((snapshot, context) => {

    //const data = snapshot.data();
    const data = {"data":[{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097}]}
    const docId = context.params.documentId;

    return data;
})

// exports.onTheFly = functions.firebase.document('telemetry/{id}').onCreate((user, context) => {

// })

exports.getdata = functions.https.onRequest((request, response) => {
   cors(request, response, () => {
       const promise = admin.firestore().doc('telemetry/data').get()
       
       console.log(promise)

    });
    // const myId = request.params.id;
    // console.log(myId)
    // //  work here
    // response.send({})
});

exports.senddata = functions.https.onRequest((request, response) => {
   cors(request, response, () => {

        

        

       
    });
    // const myId = request.params.id;
    // //  work here
    //  console.log(myId)
    // response.send({})
});