import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user/list-user.component';

const routes: Routes = [
  {
    path: 'add-user',     
    component: AddUserComponent,
  },
  {
    path: 'edit-user',   
    component: EditUserComponent,
  },
  {
    path: 'list-user',    
    component: ListUserComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
