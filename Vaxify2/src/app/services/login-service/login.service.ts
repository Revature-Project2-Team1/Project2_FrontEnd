import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { retry } from 'rxjs/operators';
import { Patient } from 'src/app/models/patient';
import { PatientCreds } from 'src/app/models/patient-creds';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private urllogin: string;
  private urllogin1: string;
  constructor(private http: HttpClient) {
    this.urllogin = "http://localhost:9000/patient/username-login/"
    this.urllogin1 ="http://localhost:9000/patient/email-login/"  
}
public validatePatientCredsWithUsername(username,password):Observable<any>{
  return this.http.get<any>(this.urllogin+ username +"/"+password)/* .pipe(catchError(this.handleError)) */;
}
/* private handleError(httpError: HttpErrorResponse) {
  if (httpError.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', httpError.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.log(httpError.error);
  
  }
  // Return an observable with a user-facing error message.
  return `${httpError.error}`;
}  */

public validatePatientCredsWithEmail(email,password):Observable<any>{
  return this.http.get<any>(this.urllogin1+email +"/"+password);;
}
}
