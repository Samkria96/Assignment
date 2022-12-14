import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import {SharedRoutingModule } from './shared-routing.module';
import {HeaderComponent } from './components/header/header.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import {DialogComponent } from './components/dialog/dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {UserListComponent } from './components/user-list/user-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Dialog2Component } from './components/dialog2/dialog2.component';
import { Dialog3Component } from './components/dialog3/dialog3.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HeaderComponent,
    DialogComponent,
    UserListComponent,
    Dialog2Component,
    Dialog3Component
   
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,    
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule ,
    MatButtonModule,    
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatPaginatorModule ,
    MatSortModule, 
    MatTableModule,
    MatSnackBarModule,
    FormsModule,
    MatCardModule
  ],
  
  exports:[
    HeaderComponent,
    DialogComponent,
    UserListComponent
  ]
})
export class SharedModule { }
