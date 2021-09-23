import { Component, OnInit } from '@angular/core';
import { userSideNavigationItem } from 'src/app/app-common/data/user.navigation.data';
import { Appointment, Employee, PatientInfo, SideNavigationItem } from 'src/app/app-common/models/navigation.model';
import { ScheduleService } from './schedule.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  userSideNavigationdata : SideNavigationItem[] = userSideNavigationItem;

  submitted = false;
  addSchedule!: FormGroup;

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();
  listOfPhysician:Employee[]=[];
  listOfPatient:PatientInfo[]=[];
  listOfTimeSlot:string[]=[];
  patientName:string="";
  physicianId:string="";
  appointment:Appointment | undefined;

  appointmentDateSelectEvent(event: MatDatepickerInputEvent<Date>) {
    this.todayDate=event.target.value as Date;
    this.todayString=formatDate(this.todayDate,'dd/MM/yyyy','en-US');
    this.listOfTimeSlot=this.scheduleService.getAllAvailableSlot(this.todayString);
    
  } 
  constructor(private scheduleService:ScheduleService,
    private router: Router, private formBuilder: FormBuilder
              ) { }

  ngOnInit(): void {

    this.addSchedule = this.formBuilder.group({
      patient: new FormControl(),
      employee: new FormControl(),
      date: new FormControl(),
      time: new FormControl(),
      description: new FormControl()
    });

    this.listOfPhysician=this.scheduleService.getAllStaffByRole("Physician");
    this.listOfPatient=this.scheduleService.getAllPatient();
  }
  
  get registerFormControl() {
    return this.addSchedule.controls;
  }

  save(){
    this.appointment=new Appointment(this.todayString,this.addSchedule.controls.time.value,this.addSchedule.controls.patient.value
      ,this.addSchedule.controls.description.value,this.addSchedule.controls.employee.value);
    this.scheduleService.createAppointment(this.appointment).subscribe((data) => {
      this.router.navigateByUrl('/user');
     });
    /*if(this.addSchedule.valid){
    alert('Appointment Added Successfully');
    this.router.navigateByUrl('/user/patientmodify');
    }
    else{
      alert('Please Fill All The Fields')
    }*/
    this.router.navigateByUrl('/user/patientmodify');
  }

  showPhysicianId(event: any){
    this.physicianId=event.employeeId;
  }

  showPatientName(event: any){
    this.patientName=event.name;
  }
}
