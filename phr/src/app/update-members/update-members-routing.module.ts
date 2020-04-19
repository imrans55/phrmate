import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMembersPage } from './update-members.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMembersPageRoutingModule {}
