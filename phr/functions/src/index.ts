import * as functions from 'firebase-functions';


// Firebase
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);


// Cloud Vision
const vision = require('@google-cloud/vision');
const visionClient =  new vision.ImageAnnotatorClient();

// Dedicated bucket for cloud function invocation
const bucketName = 'phrb-c3044-visap';

exports.imageTagger = functions.storage.bucket(bucketName).object().onChange( async (event: { data: any; }) => {

            // File data
            const object = event.data;
            const filePath = object.name;   

            // Location of saved file in bucket
            const imageUri = `gs://${bucketName}/${filePath}`;

            const docId = filePath.split('.jpg')[0];

            const docRef  = admin.firestore().collection('photos').doc(docId);

            // Await the cloud vision response
            const text = await visionClient.textDetection(imageUri);
          
            // Map the data to desired format
          


            return docRef.set({ text }).then(res  => {
                console.log('this is the update result', res)
            }).catch(err  => {
                console.log('this is the update result', err)
            })
                      
});
