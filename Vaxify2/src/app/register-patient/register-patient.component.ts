  
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


import {RegisterService} from '../services/RegisterService/register.service';
import { AlertService } from '../services/AlertService/alert.service';
import { PatientCreds } from '../models/patient-creds';
import { NoWhiteSpaceValidator } from '../Validators/no-whitespace';
import swal from 'sweetalert';


@Component({
  selector: 'app-register-patient',
  templateUrl: 'register-patient.component.html',
  styleUrls: ['register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {
  myForm: FormGroup;
  user: PatientCreds;
  status:boolean;
  inboudClick = false;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registerService: RegisterService,
    private alertService: AlertService
  ) {
    this.user = new PatientCreds();

   }

  ngOnInit() {
    this.createForm();

  }

  createForm(){
    this.myForm = this.fb.group({
      usernameValidator:['', [Validators.required, NoWhiteSpaceValidator.cannotContainSpace]],
      emailValidator:['',[ Validators.required, Validators.email,NoWhiteSpaceValidator.cannotContainSpace]],
      ssnValidator:['', [Validators.required, Validators.pattern('^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$'),NoWhiteSpaceValidator.cannotContainSpace]],
      passwordValidator:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),NoWhiteSpaceValidator.cannotContainSpace]],
     });
  }
  get f() { return this.myForm.controls; } //used to get form fields


  onSubmit() {
}

registerPatientCreds(){
  this.inboudClick= true;
  this.alertService.clear();

  if (this.myForm.invalid) {
      return;
  }

  this.registerService
        .registerPatientCreds(this.user.email, this.user.username, this.user.password, this.user.SSN)
        .subscribe((res) => {
          this.status = res;
          if (this.status == true) {
            swal('Yay','You are sucessfully registered','sucess');
            this.router.navigate(['../loginPatient'], {
              relativeTo: this.route,
            });
          }
        },
          (error) => {
            swal('Oops',error.error,'error');

          }
        );

}
}
