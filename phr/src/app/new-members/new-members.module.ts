import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMembersPageRoutingModule } from './new-members-routing.module';

import { NewMembersPage } from './new-members.page';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMembersPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewMembersPage]
})
export class NewMembersPageModule {}
