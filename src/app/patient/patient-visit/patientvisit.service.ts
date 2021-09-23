import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppModule } from 'src/app/app.module';

@Injectable({ providedIn: 'root' })
export class PatientVisitService {
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
  patientVisitDetails(RegisterData: {
    vital_signs:{  
    height: any;
    weight: any;
    blood_pressure: any;
    body_temp: any;
    respiration_rate: any;
    };
    diagnosis:{
        diagnosis: any;
    description: any;
    diagnosisIsDepricated: any;
    };
    Procedures:{
        procedures: any;
        description: any;
    };
    medication:{
    drugID: any;
    drugName: any;
    drugGenName: any;
    drugBrandName: any;
    drugForm: any;
    drugStrength: any;
    };
  }) {
    const url = 'patientVisitDetails';
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
