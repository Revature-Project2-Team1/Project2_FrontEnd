import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { PatientCreds } from '../../models/patient-creds';

@Injectable({
  providedIn: 'root'
})
export class CheckRegistrationService {

  constructor(private router: Router, private http: HttpClient) {}

  CheckRegistration(patientCreds: PatientCreds) {
    return this.http.get(`${environment.apiUrl}/patient/patientCreds`);//insert post method here
}
}
