const admin = require('firebase-admin');
const fs = require('fs');
const csv = require('csv-parser');
const config =  require("./config.json");


var serviceAccount = require(config.serviceAccountKey);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

function importListFromCSV() {
    var data = [];
    const documentId = config.docID;
    fs.createReadStream(config.csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            //Extracting the list of data from the CSV file
            const eachData = row.data.split(',').map((data) => data.trim());
            data.push(eachData[0]);
        })
        .on('end', () => {
            //Uploading the code to Firestore
            console.log(data);
            db.collection(config.collection).doc(documentId).set({
                [config.FieldToUpdate]: data,
            })
                .then(() => {
                    console.log(`Added data for document ${documentId}`);
                })
                .catch((error) => {
                    console.error(`Error adding data for document ${documentId}:`, error);
                });
            console.log('CSV file successfully processed');
        });
}

  importListFromCSV();