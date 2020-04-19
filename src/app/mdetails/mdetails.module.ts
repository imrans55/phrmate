import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdetailsPage } from './mdetails.page';
import { MdetailsResolver } from './mdetails.resolver';
import { MdetailsPageRoutingModule } from './mdetails-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MdetailsPageRoutingModule
  ],
  declarations: [MdetailsPage],
  providers:[MdetailsResolver]

})
export class MdetailsPageModule {}
