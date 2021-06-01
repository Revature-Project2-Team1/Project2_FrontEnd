import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { HomeComponent } from './home/home.component';
import {LoginPatientComponent} from './login-patient/login-patient.component';
import { LoginProviderComponent } from './login-provider/login-provider.component';
import { LogoutComponent } from './logout/logout.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';
import { QrCodeGeneratorReaderComponent } from './qr-code-generator-reader/qr-code-generator-reader.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { UpdatePasswordCheckComponent } from './update-password-check/update-password-check.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewStatusComponent} from './view-status/view-status.component';
const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'home', component:HomeComponent},
{path: 'loginPatient', component:LoginPatientComponent},
{path: 'loginProvider', component:LoginProviderComponent},
{path: 'registerPatient', component:RegisterPatientComponent},
{path: 'qr-generator-reader', component:QrCodeGeneratorReaderComponent},
{path: 'patient-dashboard',component:PatientDashboardComponent},
{path: 'provider-dashboard', component:ProviderDashboardComponent},
{path: 'patientUpdate', component:UpdatePatientComponent},
{path: 'changeUsername', component: ChangeEmailComponent},
{path: 'viewStatus', component: ViewStatusComponent},
{path: 'updatePasswordCheck', component: UpdatePasswordCheckComponent},
{path: 'updatePassword', component: UpdatePasswordComponent},
{path: 'logout', component: LogoutComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
