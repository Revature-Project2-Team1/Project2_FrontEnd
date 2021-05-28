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
export class RegisterService {

  constructor(private router: Router, private http: HttpClient) {}

  register(patientCreds: PatientCreds) {
    return this.http.post(`${environment.apiUrl}/patient/patientCreds`,patientCreds);//insert post method here
<<<<<<< HEAD
=======
}
>>>>>>> 1fd99d38bb9a50423bfb1b03947674991e70ba57
}
}