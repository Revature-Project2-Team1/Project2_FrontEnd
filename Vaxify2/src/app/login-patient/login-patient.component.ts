import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientCreds } from '../models/patient-creds';
import { AlertService } from '../services/AlertService/alert.service';
import { NavbarService } from '../services/NavBarService/navbar.service';
import { LoginServiceService } from '../services/login-service/login.service';
import { NoWhiteSpaceValidator } from '../Validators/no-whitespace';
import swal from 'sweetalert';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-home',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css'],
})
export class LoginPatientComponent implements OnInit {
  user: PatientCreds;
  user1: PatientCreds;
  myForm:FormGroup;
  inboudClick = false;
  ssn:string;
  patient:Patient;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginServiceService,
    private fb: FormBuilder,
    private alertService: AlertService,
    private navService: NavbarService
  ) {
    this.user = new PatientCreds();
    this.createForm();
  }

  ngOnInit(): void {

  }
  createForm(){
    this.myForm = this.fb.group({
      input:['', [Validators.required, NoWhiteSpaceValidator.cannotContainSpace]],
      passwordValidator:['',[Validators.required,NoWhiteSpaceValidator.cannotContainSpace ]]
     });
  }



  get f() { return this.myForm.controls; } //used to get form fields

  validatePatientCreds(): void {
    this.inboudClick = true;
     this.alertService.clear();

     if (this.myForm.invalid) {
         return;
     }
   const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.user.username.match(re)) {
      this.loginService
        .validatePatientCredsWithEmail(this.user.username, this.user.password)
        .subscribe((res) => {

          this.ssn = res.customerSSN;
          console.log(this.ssn != null);
          if (this.ssn != null) {
            sessionStorage.setItem('patient', this.ssn);
            sessionStorage.setItem('login_type', "Patient");

            swal('Yay','You are in','success');
            this.navService.updateNavAfterAuth("Patient")
            this.router.navigate(['../patient-dashboard'], {
              relativeTo: this.route,
            });
          }
        },
          (error) => {
            swal('Oops',error.error);
          }
        );
    } else { 
      this.loginService
        .validatePatientCredsWithUsername(
          this.user.username,
          this.user.password
        )
        .subscribe(
          (res) => {

            this.ssn = res.customerSSN;
            console.log(res);
            console.log(this.ssn != null);
            if (this.ssn != null) {

              sessionStorage.setItem('patient', this.ssn);
              sessionStorage.setItem('login-type', "Patient");

              swal('Yay','You are in','success');
              this.navService.updateLoginStatus(true);
              this.navService.updateNavAfterAuth("Patient")

              this.router.navigate(['../patient-dashboard'], {
                relativeTo: this.route,
              });
            }
          },
          (error) => {
            swal('Oops',error.error);
          }
        );
    }
  }
}
