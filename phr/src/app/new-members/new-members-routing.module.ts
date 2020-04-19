import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMembersPage } from './new-members.page';

const routes: Routes = [
  {
    path: '',
    component: NewMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMembersPageRoutingModule {}
