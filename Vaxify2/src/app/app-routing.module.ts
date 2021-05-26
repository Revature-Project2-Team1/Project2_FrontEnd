import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginPatientComponent} from './login-patient/login-patient.component';
import { LoginProviderComponent } from './login-provider/login-provider.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'home', component:HomeComponent},
{path: 'loginPatient', component:LoginPatientComponent},
{path: 'loginProvider', component:LoginProviderComponent},
{path: 'registerPatient', component:RegisterPatientComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
