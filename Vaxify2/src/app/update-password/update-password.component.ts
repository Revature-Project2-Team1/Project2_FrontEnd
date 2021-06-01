import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientCreds } from '../models/patient-creds';
import { AlertService } from '../services/AlertService/alert.service';
import { UpdatePasswordService } from '../services/update-password/update-password.service';
import { NoWhiteSpaceValidator } from '../Validators/no-whitespace';
import { ConfirmedValidator } from '../Validators/password';
import swal from 'sweetalert';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  email = sessionStorage.getItem("patient_email");  
  user:PatientCreds;
  user1:PatientCreds;
  myForm:FormGroup;
  inboudClick = false;
  status:boolean;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private updatePasswordService: UpdatePasswordService) {
      this.user = new PatientCreds();
      this.user1 = new PatientCreds();
     }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.myForm = this.fb.group({
      passwordValidator:['',[ Validators.required,Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'),NoWhiteSpaceValidator.cannotContainSpace]],
      password1Validator:['', [Validators.required,NoWhiteSpaceValidator.cannotContainSpace]]},

      { 
        validator: ConfirmedValidator('passwordValidator', 'password1Validator')
      }


    );
  }
  
  get f() { return this.myForm.controls; } //used to get form fields

  updatePassword(){
    this.inboudClick = true;
    this.alertService.clear();
    console.log(this.email)

    if (this.myForm.invalid) {
        return;
    }
    this.updatePasswordService
    .updatePassword(this.user.password, this.email)
    .subscribe((res) => {
      swal('Yay','Your new password is all set','success');
        this.router.navigate(['../loginPatient'], {
        relativeTo: this.route,
        });
      
    },
      (error) => {
        swal('Oops',error.error,'error');
      }
    );
    

  }

}
