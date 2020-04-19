import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MreportsPage } from './mreports.page';

const routes: Routes = [
  {
    path: '',
    component: MreportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MreportsPageRoutingModule {}
