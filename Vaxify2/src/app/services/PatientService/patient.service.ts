
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { QRrecord } from 'src/app/models/qrrecord';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private urlQR: string;
  private urlQR2:string;

  constructor(private http: HttpClient) {
    this.urlQR = "http://localhost:9000/qr/"
  }

  public addQR(qrRecord: QRrecord):Observable<QRrecord> {

    return this.http.post<QRrecord>(this.urlQR+"add",qrRecord);
  }

  public generateQR(patient_ssn):Observable<Patient> {

    return this.http.get<any>(this.urlQR+"find-patient/"+patient_ssn);
  }

  public deleteQR(patient_ssn):Observable<Patient> {
    return this.http.delete<any>(this.urlQR+"delete/"+patient_ssn);
  }

  public checkQR(qr_id):Observable<any> {

    return this.http.get<any>(this.urlQR+"check-qr/"+qr_id);
  }
}
