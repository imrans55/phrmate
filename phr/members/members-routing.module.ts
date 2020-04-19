import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersPage } from './members.page';
import { MembersResolver } from './members.resolver';


const routes: Routes = [
  {
    path: '',
    component: MembersPage,
    resolve: {
      data: MembersResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    MembersResolver
  ]
  
})
export class MembersPageRoutingModule {}