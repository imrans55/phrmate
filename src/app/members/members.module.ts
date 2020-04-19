import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersPageRoutingModule } from './members-routing.module';

import { MembersPage } from './members.page';
import { MembersResolver } from './members.resolver';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [MembersPage],
  providers: [
    MembersResolver
  ],
  
})
export class MembersPageModule {}
