import { Component } from '@angular/core';
import { Patient } from './patient';
import { Provider } from './provider';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedOut=true;
  patientLoggedIn= false;
  providerLoggedIn=false;

  title = 'Vaxify2';
  
}







  
  

