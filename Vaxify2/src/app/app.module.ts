import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginProviderComponent } from './login-provider/login-provider.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QrCodeGeneratorReaderComponent } from './qr-code-generator-reader/qr-code-generator-reader.component';


// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

//import qr
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { LoginPatientComponent } from './login-patient/login-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginProviderComponent,
    LoginPatientComponent,
    RegisterPatientComponent,
    AlertComponent,
    QrCodeGeneratorReaderComponent,
    ProviderDashboardComponent,
    PatientDashboardComponent,
    UpdatePatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,

      FormsModule,
      ReactiveFormsModule,
    

      // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    }),
    NgxQRCodeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }