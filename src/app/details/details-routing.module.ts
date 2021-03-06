import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPage } from './details.page';
import { DetailsResolver } from './details.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: DetailsPage,
    resolve: {
      data: DetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[DetailsResolver]
  
})
export class DetailsPageRoutingModule {}
