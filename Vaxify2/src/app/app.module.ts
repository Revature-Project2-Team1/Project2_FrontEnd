import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginProviderComponent } from './login-provider/login-provider.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginProviderComponent,
    RegisterPatientComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
