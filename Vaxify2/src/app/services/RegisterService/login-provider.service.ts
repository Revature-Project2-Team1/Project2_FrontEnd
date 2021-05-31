import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginProviderService {

  private urlRegister:String;

  constructor(private router: Router, private http: HttpClient) {
    this.urlRegister = "http://localhost:9000/patient/username-login/";
  }

  CheckCreds(username, password): Observable<any> {
    return this.http.get<any>(this.urlRegister + username+'/'+password);//insert get method here

  }
}