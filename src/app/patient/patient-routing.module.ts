import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientVisitComponent } from './patient-visit/patient-visit.component';
import { PatientComponent } from './patient.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';


const routes: Routes = [
  {
     path: '',
     component: PatientComponent
 },
 {
   path: 'patient-visit',
   component: PatientVisitComponent
 },
 {
  path: 'patient-meeting',
  component: ScheduleMeetingComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
