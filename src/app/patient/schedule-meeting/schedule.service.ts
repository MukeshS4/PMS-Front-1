import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AppModule } from "src/app/app.module";

@Injectable({ providedIn: 'root' })
export class ScheduleService {

    pmsDetailsService = 'pmsDetails/';
    url = 'http://localhost:9090/patientDetails';
    constructor(
      private http: HttpClient,
      private router: Router,
      private config: AppModule
    ) {}

    
  customErrorHandler(errorResponse: HttpErrorResponse) {
    let errorText = 'Unknown error occured';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorText);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorText = 'Email already Exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorText = 'Email entered does not Exists/ Invalid EmailId';
        break;
      case 'INVALID_PASSWORD':
        errorText = `'You've entered the wrong password'`;
        break;
    }
    return throwError(errorText);
  }
  meetingDetails(RegisterData: {
    
    meetingTitle: any;
    description: any;
    physician: any;
    date: any;
    time: any;
    reason:any;
    
  }) {
    const url = 'scheduleMeeting';
    console.log('inside patient service: ', RegisterData);
    alert("Data saved successfully");
    return this.http
      .post(
        this.config.resourceUrl + this.pmsDetailsService + url,
        RegisterData
      )
      .pipe(
        catchError(this.customErrorHandler),
        tap((resData: any) => {
          console.log('Registration Completed - API hit success:', resData);
        })
      );
  }

  
}