import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { PatientCreds } from '../../models/patient-creds';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router: Router, private http: HttpClient) {}

  register(patientCreds: PatientCreds) {
    return this.http.post(``,patientCreds);//insert post method here
    
}
}
