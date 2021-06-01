import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { LoginProviderComponent } from './login-provider/login-provider.component';
import { Patient } from './models/patient';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { NavbarService } from './services/NavBarService/navbar.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Vaxify2';

  links: Array<{ text: string, path: string }>;
  isLoggedIn = false;

  constructor(private router: Router, private navbarService: NavbarService) {
    this.router.config.unshift(
      { path: '/loginPatient', component: LoginPatientComponent },
      { path: '/loginProvider', component: LoginProviderComponent },
      { path: '/registerPatient', component: RegisterPatientComponent },
    );
  }

  ngOnInit() {
    this.links = this.navbarService.getLinks();
    //this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
    
  }

  logout() {
    console.log("Logout");
    console.log(sessionStorage.getItem('patient'));
    sessionStorage.clear();
    console.log(sessionStorage.getItem('patient'));
    this.isLoggedIn=false;
    this.navbarService.updateLoginStatus(false);
    this.router.navigate(['home']);
  }
  

}







  
  

