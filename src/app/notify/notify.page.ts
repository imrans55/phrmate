import { Component, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.page.html',
  styleUrls: ['./notify.page.scss'],
})
export class NotifyPage implements OnInit {
  scheduled = [];

  constructor(private plt:Platform, private localNotifications: LocalNotifications, private alertCtrl: AlertController ) {

    this.plt.ready().then(() =>{
      this.localNotifications.on('click').subscribe(res => {
        console.log('click: ', res);
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);


      });
      this.localNotifications.on('trigger').subscribe(res => {
        console.log('trigger: ', res);
        let msg = res.data ? res.data.mydata : '';
        this.showAlert(res.title, res.text, msg);

      });
    });
   }

  ngOnInit() {
  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'Notifications',
      data: {mydata: 'Hiiden Message'},
      trigger: { in:5, unit: ELocalNotificationTriggerUnit.SECOND }


    })

  }

  recurringNotification() {
    this.localNotifications.schedule({
      id: 12,
      title: 'Recurring',
      text: 'Recurring Notifications',
     
      trigger: { every: ELocalNotificationTriggerUnit.MINUTE }
    });

  }

  repeatingDaily() {

    this.localNotifications.schedule({
      id: 22,
      title: 'Recurring',
      text: 'Recurring Notifications',
     
      trigger: { every: {minute: 50} }
    });

  }

  getAll() {
    this.localNotifications.getAll().then(res => {
      this.scheduled = res;
    })

  }

  showAlert(header, sub, msg) {
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['OK']

    }).then(alert => alert.present());
  }


}
