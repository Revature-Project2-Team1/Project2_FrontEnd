import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private links = new Array<{ text: string, path: string }>();
  private isLoggedIn = new Subject();
  login_type: string;

  constructor(private router:Router) {

    this.login_type=sessionStorage.getItem('login_type');
    
    
    this.addItem({ text: 'Login Patient', path: '/loginPatient' });
    this.addItem({ text: 'Login Provider', path: '/loginProvider' });
    this.addItem({ text: 'Register Patient', path: '/registerPatient' });
  
    console.log(this.login_type);
    this.isLoggedIn.next(false);
  }

  getLinks() {
    return this.links;
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }

  updateLoginStatus(status: boolean) {
    this.isLoggedIn.next(status);

    if (!status) {
      this.clearAllItems();
      this.addItem({ text: 'Login Patient', path: '/loginPatient' });
      this.addItem({ text: 'Login Provider', path: '/loginProvider' });
      this.addItem({ text: 'Register Patient', path: '/registerPatient' });
    }
  }

  updateNavAfterAuth(role: string): void {
    this.clearAllItems();


    if (role === 'Patient') {
      this.addItem({ text: 'QR Code', path: '/qr-generator-reader' });
      this.addItem({ text: 'View Status', path: '/viewStatus' });
      this.addItem({ text: 'Logout', path: '/logout' });

    } else if (role === 'Provider') {
      this.addItem({ text: 'Update Patient Vaccine Status', path: '/patientUpdate' });
      this.addItem({ text: 'Logout', path: '/logout' });
    }
  }

  addItem({ text, path }) {
    this.links.push({ text: text, path: path });
  }

  removeItem({ text }) {
    this.links.forEach((link, index) => {
      if (link.text === text) {
        this.links.splice(index, 1);
      }
    });
  }

  clearAllItems() {
    this.links.length = 0;
  }
}