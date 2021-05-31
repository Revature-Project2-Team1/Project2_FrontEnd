import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatePasswordService {
  private urlUpdatePassword:String;
  private urlUpdatePassword1:String;

  constructor(private http: HttpClient) { 
    this.urlUpdatePassword ="http://localhost:9000/patient/validatepatientcredential/"
    this.urlUpdatePassword1 = "http://localhost:9000/patient/updatepassword/"
  }
  updatePasswordCheck(ssn, email):Observable<any>
  {
    return this.http.get<any>(this.urlUpdatePassword+ssn +"/"+email);
  }

  updatePassword(password, email):Observable<any>{
    return this.http.get<any>(this.urlUpdatePassword1+ password +"/"+email);
  }
}
