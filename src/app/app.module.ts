import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SharedModule } from './modules/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    ReactiveFormsModule, 
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatSliderModule,
    SharedModule ,
   
   
  ],
  exports:[SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
