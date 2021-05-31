import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { PatientCreds } from '../../models/patient-creds';
import { VaccineRecord } from 'src/app/models/vaccine-record';

@Injectable({
  providedIn: 'root'
})
export class ViewStatusService {

  constructor(private router:Router, private http:HttpClient) { }

  viewStatus(ssn:string){
    return this.http.get(`${environment.apiUrl}/patient/getStatus/`+ssn);
  }
  getAllRecords(ssn:string){
    return this.http.get<VaccineRecord[]>(`${environment.apiUrl}/patient/getAllRecords/`+ssn)
  }
}
