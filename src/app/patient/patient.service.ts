import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PatientService {
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
  patientDetails(RegisterData: {
    demographies: {
      title: any;
      first_name: any;
      last_name: any;
      date_of_birth: any;
      age: any;
      gender: any;
      race: any;
      ethnicity: any;
      language: any;
      email: any;
      home_address: any;
      country_code: any;
      contact_number: any;
      emergency_contact_details: {
        e_first_name: any;
        e_last_name: any;
        relationship: any;
        email_address: any;
        ecountry: any;
        contact: any;
        address: any;
        patient_portal_access: any;
      };
    };
    allergies: {
      allergies: any;
      allergyid: any;
      type: any;
      allergyname: any;
      allergydescription: any;
      allergyc: any;
    };
  }) {
    const url = 'patientDetails';
    console.log('inside patient service: ', RegisterData);

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
