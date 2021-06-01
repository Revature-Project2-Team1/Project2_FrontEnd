import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { LoginProviderComponent } from './login-provider/login-provider.component';
import { QrCodeGeneratorReaderComponent } from './qr-code-generator-reader/qr-code-generator-reader.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { NavbarService } from './services/NavBarService/navbar.service';
import { UpdatePatientComponent } from './update-patient/update-patient.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Vaxify2';

  links: Array<{ text: string, path: string }>;
  login_type: string;
  isLoggedIn=false;

  constructor(private router: Router, private navbarService: NavbarService) {
    this.router.config.unshift(
      { path: '/loginPatient', component: LoginPatientComponent },
      { path: '/loginProvider', component: LoginProviderComponent },
      { path: '/registerPatient', component: RegisterPatientComponent },
      { path: '/patientUpdate', component: UpdatePatientComponent },
      { path: '/qr-generator-reader', component: QrCodeGeneratorReaderComponent}
    );
  }

  ngOnInit() {
    this.login_type=sessionStorage.getItem('login_status');
    this.links = this.navbarService.getLinks();

    if (this.login_type){
      this.isLoggedIn=true;
    }

  }


    
  

 
  

}







  
  

