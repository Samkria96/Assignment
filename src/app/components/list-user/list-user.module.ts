import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUserRoutingModule } from './list-user-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { SidebarComponent } from 'src/app/modules/shared/components/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    CommonModule,
    ListUserRoutingModule,
    SharedModule
  ]
})
export class ListUserModule { }
