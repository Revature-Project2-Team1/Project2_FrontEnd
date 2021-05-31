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

  private urlRegister:String;

  constructor(private http: HttpClient) {
    this.urlRegister = "http://localhost:9000/patient/register/";
   }

   registerPatientCreds(email, username, password, ssn):Observable<any>{
    return this.http.get<any>(this.urlRegister+email +"/"+username+"/"+password+"/"+ssn);
  }
}