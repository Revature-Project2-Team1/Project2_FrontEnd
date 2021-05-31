import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { first } from 'rxjs/operators';
import {DatePipe} from '@angular/common';

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
  message = "";
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private updatePatientService: UpdatePatientService,
    private alertService: AlertService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {// used to  create the form to eventually post
    this.form = this.formBuilder.group({
      ssn: ['', [Validators.required,  NoWhiteSpaceValidator.cannotContainSpace,Validators.pattern('^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$')]],
      lot:['', [Validators.required, Validators.minLength(3), Validators.maxLength(200), NoWhiteSpaceValidator.cannotContainSpace]],
      date: ['', [Validators.required, DateValidator.ptDate]],
      vaccineType:['',Validators.required]
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

    this.form.patchValue({

      date: this.datePipe.transform(new Date(this.form.controls['date'].value),"yyyy-MM-dd")
    })
    this.loading = true;
    this.updatePatientService.update(this.form.value)
    
        .pipe(first())
        .subscribe({
            next: () => {
                this.alertService.success('Update successful', { keepAfterRouteChange: true });
                this.router.navigate(['/updatePatient'], { relativeTo: this.route });//This will reroute to the customer dashboard.
            },
            error: error => {
                this.alertService.error(error.error.text);
                this.message= error.error.text;
                this.loading = false;
            }
        });
    }
}
