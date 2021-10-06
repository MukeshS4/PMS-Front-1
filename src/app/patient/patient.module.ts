import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientVisitComponent } from './patient-visit/patient-visit.component';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


@NgModule({
  declarations: [
    PatientComponent,
    PatientVisitComponent,
    ScheduleMeetingComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    AppCommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class PatientModule { }
