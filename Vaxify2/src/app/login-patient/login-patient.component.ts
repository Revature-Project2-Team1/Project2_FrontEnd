import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NavbarService } from '../services/NavBarService/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {

  isLoggedIn = false;
  role = '';

  constructor(
    private navbarService: NavbarService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
    //this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }

  ngOnInit(): void {
  }
  changeEmail(){
  this.router.navigate(['../changeUsername'], { relativeTo: this.route });
  }
}
