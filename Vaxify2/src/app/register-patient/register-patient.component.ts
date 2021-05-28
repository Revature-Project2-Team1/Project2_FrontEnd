import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { first } from 'rxjs/operators';


import {RegisterService} from '../services/RegisterService/register.service';
import { AlertService } from '../services/AlertService/alert.service';


@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registerService: RegisterService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({

      FullName: ['',[ Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      SSN: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      Email: ['',[ Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8),Validators.maxLength(200)]],
      username:['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]]

  });
  }
  get f() { return this.form.controls; } //used to get form fields

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.registerService.register(this.form.value)

        .pipe(first())
        .subscribe({
            next: () => {
                this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                this.router.navigate(['../login'], { relativeTo: this.route });
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
    }

}
