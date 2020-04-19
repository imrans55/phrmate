import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdetailsPage } from './mdetails.page';
import { MdetailsResolver } from './mdetails.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: MdetailsPage,
    resolve: {
      data: MdetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[MdetailsResolver]
  
})
export class MdetailsPageRoutingModule {}