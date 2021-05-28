
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private urlSearch: string;
  constructor(private http: HttpClient) {
    this.urlSearch = "http://localhost:9000/patient/"
  }

  public generateQR(patient_id):Observable<any> {

    return this.http.get<any>(this.urlSearch+patient_id);
  }

  public verifyQR(qr_id,patient_id):Observable<any> {

    return this.http.get<any>(this.urlSearch+patient_id +"/"+qr_id);
  }
}
