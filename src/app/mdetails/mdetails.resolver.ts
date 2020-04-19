import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../services/members.service';

@Injectable()
export class MdetailsResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService,) { }

  resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
      let itemId = route.paramMap.get('id');
      this.firebaseService.getTask(itemId)
      .then(data => {
        data.id = itemId;
        resolve(data);
      }, err => {
        reject(err);
      })
    })
  }
}
