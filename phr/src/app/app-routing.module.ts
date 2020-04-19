import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './register/register-routing.module#RegisterPageModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardPageModule'
  },
  {
    path: 'details',
    loadChildren: './details/details.module#DetailsPageModule'
  },
  {
    path: 'reports',
    loadChildren: './reports/reports.module#ReportsPageModule'
  },
  {
    path: 'new-task',
    loadChildren: './new-task/new-task.module#NewTaskPageModule'
  },
  {
    path: 'ocr',
    loadChildren: './ocr/ocs.module#OcrPageModule'
  },
  {
    path: 'members',
    loadChildren: './members/members.module#MembersPageModule'
  },
  {
    path: 'new-members',
    loadChildren: './new-members/new-members.module#NewMembersPageModule'
  },
  {
    path: 'mreports',
    loadChildren: './mreports/mreports.module#MreportsPageModule'
  },
  {
    path: 'view-members',
    loadChildren: './view-members/view-members.module#ViewMembersPageModule'
  },
  {
    path: 'update-members',
    loadChildren: './update-members/update-members.module#UpdateMembersPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
