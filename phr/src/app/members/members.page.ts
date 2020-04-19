import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { LoadingController } from '@ionic/angular';
import {Observable} from 'rxjs';
import {FirebaseService} from '../services/members.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Note} from '../modal/Note'

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  

  private notes: Observable<Note[]>;
  constructor(private fbService: FirebaseService) {}

  ngOnInit() {
    this.notes = this.fbService.getNotes();
  }

  

}
