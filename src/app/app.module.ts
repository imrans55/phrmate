import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AuthenticateService } from './services/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AngularFireDatabaseModule } from '@angular/fire/database';

import * as firebase from 'firebase';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DetailsPageModule } from './details/details.module';
import { ReportsPageModule } from './reports/reports.module';
import { DashboardPageModule } from './dashboard/dashboard.module';
import { LoginPageModule } from './login/login.module';
import { RegisterPageModule } from './register/register.module';
import { MembersPage } from 'phr/members/members.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx'


firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore
    AngularFireAuthModule, // imports firebase/auth
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticateService,
    ImagePicker,
    WebView,
    { provide: FirestoreSettingsToken, useValue: {} },


    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
