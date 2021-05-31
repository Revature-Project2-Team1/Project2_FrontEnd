import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { PatientCreds } from '../../models/patient-creds';
import { VaccineRecord } from 'src/app/models/vaccine-record';

@Injectable({
  providedIn: 'root'
})
export class UpdatePatientService {

  constructor(private router: Router, private http: HttpClient) {}

  update(vaccineRecords:VaccineRecord){
    return this.http.put(`${environment.apiURL}/provider/vaxRecords`, vaccineRecords)
  }
}
