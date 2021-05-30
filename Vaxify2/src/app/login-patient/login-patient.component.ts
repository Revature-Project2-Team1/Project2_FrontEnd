import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PatientCreds } from '../models/patient-creds';
import { AlertService } from '../services/AlertService/alert.service';
import { RegisterService } from '../services/RegisterService/register.service';

@Component({
  selector: 'app-home',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {

  user: PatientCreds;
  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    //private registerService: RegisterService,
    private alertService: AlertService
  
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f(){
    return this.form.controls;
  }
  onSubmit() {
    console.log(this.user);
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }


    this.loading = true;
    /* this.registerService.register(this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
               // this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                this.router.navigate(['../login'], { relativeTo: this.route });
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        }); */
    }
  
  
  
  
}
