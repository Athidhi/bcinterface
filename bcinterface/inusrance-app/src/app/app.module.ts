import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsurancehomepageComponent } from './insurancehomepage/insurancehomepage.component';

const routes: Routes = [
  { path: 'insurancepage', component: InsurancehomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InsurancehomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
