import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { UserListComponent } from './components/user-list/user-list.component'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';



@NgModule({
  declarations: [
    HeaderComponent,
    DialogComponent,
    UserListComponent
   
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,    
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule ,
    MatButtonModule,
    // MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatPaginatorModule ,
    MatSortModule 
  ],
  
  exports:[
    HeaderComponent,
    DialogComponent
  ]
})
export class SharedModule { }
