import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/members.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import {Note} from '../modal/Note';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-members',
  templateUrl: './new-members.page.html',
  styleUrls: ['./new-members.page.scss'],
})
export class NewMembersPage implements OnInit {

  note: Note = {
    title: '',
    content: '',
    createdAt: new Date().getTime()
  };

  constructor(
      private activatedRoute: ActivatedRoute,
      private fbService: FirebaseService,
      private toastCtrl: ToastController,
      private router: Router
  ) { }

  ngOnInit() {
  }

  addNote() {
    this.fbService.addNote(this.note).then(() => {
      this.router.navigateByUrl('/');
    }, err => {
    });
  }

}

