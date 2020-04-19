import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMembersPageRoutingModule } from './update-members-routing.module';

import { UpdateMembersPage } from './update-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMembersPageRoutingModule
  ],
  declarations: [UpdateMembersPage]
})
export class UpdateMembersPageModule {}
