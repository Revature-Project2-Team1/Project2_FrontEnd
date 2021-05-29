import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { first } from 'rxjs/operators';


import {UpdatePatientService} from '../services/PatientService/update-patient.service';
import { AlertService } from '../services/AlertService/alert.service';
import {NoWhiteSpaceValidator} from '../Validators/no-whitespace';
import {DateValidator} from '../Validators/Date';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private updatePatientService: UpdatePatientService,
    private alertService: AlertService
  ) { }

  ngOnInit() {// used to  create the form to eventually post
    this.form = this.formBuilder.group({
      SSN: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), NoWhiteSpaceValidator.cannotContainSpace]],
      lot:['', [Validators.required, Validators.minLength(3), Validators.maxLength(200), NoWhiteSpaceValidator.cannotContainSpace]],
      date: ['', [Validators.required, DateValidator.ptDate]],
      VaccineType:['',Validators.required]
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
    console.log(this.form.value);
    this.loading = true;
    this.updatePatientService.update(this.form.value)

        .pipe(first())
        .subscribe({
            next: () => {
                this.alertService.success('Update successful', { keepAfterRouteChange: true });
                this.router.navigate([''], { relativeTo: this.route });//This will reroute to the customer dashboard.
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
    }
}
