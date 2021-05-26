import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {

  isLoggedIn = false;
  role = '';

  constructor(private navbarService: NavbarService) {
    //this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }

  ngOnInit(): void {
  }
}
