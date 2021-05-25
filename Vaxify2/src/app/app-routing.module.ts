import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginPatientComponent} from './login-patient/login-patient.component';
import { LoginProviderComponent } from './login-provider/login-provider.component';

const routes: Routes = [
{path: 'loginPatient', component:LoginPatientComponent},
{path: 'home', component:HomeComponent},
{path: 'loginProvider', component:LoginProviderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
