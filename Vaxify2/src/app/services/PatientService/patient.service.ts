
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private urlQR: string;
  constructor(private http: HttpClient) {
    this.urlQR = "http://localhost:9000/qr/find-patient/"
  }

  public generateQR(patient_ssn):Observable<Patient> {

    return this.http.get<any>(this.urlQR+patient_ssn);
  }

  public verifyQR(qr_id,patient_id):Observable<any> {

    return this.http.get<any>(this.urlQR+patient_id +"/"+qr_id);
  }
}
