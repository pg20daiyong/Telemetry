
const functions = require("firebase-functions");
const admin = require('firebase-admin');
const config = {
    projectId: "cloud-d9f02",
    databaseURL: "https://cloud-d9f02.firebaseappio.com",
    storageBucket: "cloud-d9f02.appspot.com",
    locationId: "us-central"
};
const {Firestore} = require('@google-cloud/firestore')
const cors = require('cors')({ origin: true })
// import functions from firebase-functions

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
admin.initializeApp(config);
var db = admin.firestore();

// export const aggregate = functions.https.onCall(...
exports.aggregate = functions.https.onCall((snapshot, context) => {

    const data = snapshot.data();
    //const data = {"data":[{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097}]}
    const docId = context.params.documentId;

    return data;
})

// exports.onTheFly = functions.firebase.document('telemetry/{id}').onCreate((user, context) => {

// })

exports.getdata = functions.https.onRequest((request, response) => {
   cors(request, response, () => {       
        let db = admin.firestore();
        db.collection("telemetry").doc("data").get()
        .then(doc=>{
            const data = doc.data();
            return response.send(data);
        })
    });
    // const myId = request.params.id;
    // console.log(myId)
    // //  work here
    // response.send({})
});

exports.senddata = functions.https.onRequest((request, response) => {
 
    cors(request, response, () => {       
        let db = admin.firestore();
        const data = {"data":[{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097}]}

        console.log(data)
        const promise = db.collection("telemetry").doc("data").set(data)
        const prom = promise.then(() => {
            response.end()
        })
        prom.catch(error => {
            console.log(error);
            response.status(500).send(error);
        })  
    });
        

       

    // const myId = request.params.id;
    // //  work here
    //  console.log(myId)
    // response.send({})
});