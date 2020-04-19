import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MreportsPageRoutingModule } from './mreports-routing.module';

import { MreportsPage } from './mreports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MreportsPageRoutingModule
  ],
  declarations: [MreportsPage]
})
export class MreportsPageModule {}
