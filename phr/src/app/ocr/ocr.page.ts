
import { Component } from '@angular/core';
import {  LoadingController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore} from '@angular/fire/firestore';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.page.html',
  styleUrls: ['./ocr.page.scss'],
})
export class OcrPage {
  

    // Upload task
    task: AngularFireUploadTask;
  
    // Firestore data
    result$: Observable<any>;
  
    
    image: string;
  
    constructor(private storage: AngularFireStorage, 
                private afs: AngularFirestore, 
                private camera: Camera,
                private loadingCtrl: LoadingController) {
  
                 
    }
  
  
    startUpload(file: string) {
  
      // Show loader
      
  
      // const timestamp = new Date().getTime().toString();
      const docId = this.afs.createId();
  
      const path = `${docId}.jpg`;
  
      // Make a reference to the future location of the firestore document
      const photoRef = this.afs.collection('photos').doc(docId)
      
      // Firestore observable, dismiss loader when data is available
      this.result$ = photoRef.valueChanges()
          .pipe(
            filter(data => !!data)
          );
  
      
      // The main task
      this.image = 'data:image/jpg;base64,' + file;
      this.task = this.storage.ref(path).putString(this.image, 'data_url'); 
    }
  
    // Gets the pic from the native camera then starts the upload
    async captureAndUpload() {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      }
  
      const base64 = await this.camera.getPicture(options)
  
      this.startUpload(base64);
    }
  
  }

  


