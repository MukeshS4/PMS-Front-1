import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
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
},
{
 path: 'patient-details/1',
 component: PatientDetailsComponent
},
{
  path:'home-page',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
