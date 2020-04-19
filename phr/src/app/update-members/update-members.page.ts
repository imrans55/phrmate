import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Note} from '../modal/Note';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/members.service';

@Component({
  selector: 'app-update-members',
  templateUrl: './update-members.page.html',
  styleUrls: ['./update-members.page.scss'],
})
export class UpdateMembersPage implements OnInit, AfterViewInit {
  note: Note = {
    id: '',
    title: '',
    content: '',
    createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getNote(id).subscribe(noteData => {
        this.note = noteData;
      });
    }
  }

  updateNote() {
    this.fbService.updateNote(this.note).then(() => {
     this.router.navigate(['/']);
    }, err => {
    });
  }
}
