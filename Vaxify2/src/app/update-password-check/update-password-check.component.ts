import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AlertService } from '../services/AlertService/alert.service';
import { PatientCreds } from '../models/patient-creds';
import { NoWhiteSpaceValidator } from '../Validators/no-whitespace';
import { UpdatePasswordService } from '../services/update-password/update-password.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-update-password-check',
  templateUrl: './update-password-check.component.html',
  styleUrls: ['./update-password-check.component.css']
})
export class UpdatePasswordCheckComponent implements OnInit {
  myForm: FormGroup;
  user:PatientCreds;
  inboudClick = false;
  status:boolean;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private updatePasswordService: UpdatePasswordService
     ) {     this.user = new PatientCreds();
    }

  ngOnInit(): void {
    this.createForm();
    
  }
  createForm(){
    this.myForm = this.fb.group({
      emailValidator:['',[ Validators.required, Validators.email,NoWhiteSpaceValidator.cannotContainSpace]],
      ssnValidator:['', [Validators.required, Validators.pattern('[0-9]{4}'),NoWhiteSpaceValidator.cannotContainSpace]],
    });
  }

  get f() { return this.myForm.controls; } //used to get form fields

  updatePasswordCheck(){
    this.inboudClick = true;
    this.alertService.clear();

    if (this.myForm.invalid) {
        return;
    }

    this.updatePasswordService
    .updatePasswordCheck(this.user.SSN, this.user.email)
    .subscribe((res) => {
      this.status = res;
      if (this.status == true) {
        swal('Yay','We found you','success');
        sessionStorage.setItem('patient_email', this.user.email);
        this.router.navigate(['../updatePassword'], {
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
