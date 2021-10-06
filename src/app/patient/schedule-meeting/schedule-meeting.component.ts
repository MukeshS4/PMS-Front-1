import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patientSideNavigationItem } from 'src/app/app-common/data/patientNavigation';
import { SideNavigationItem } from 'src/app/app-common/models';
import { SheduleMeetingService } from './schedule-meeting.service';
import { ScheduleService } from './schedule.service';


@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent implements OnInit {

  sideNavigationdata : SideNavigationItem[] = patientSideNavigationItem;
  schduleForm!: FormGroup;
  submitted!: boolean;
  constructor(private fb : FormBuilder, private scheduleService :ScheduleService) { }

  
  ngOnInit(): void {
    this.schduleForm = this.fb.group({
      meetingTitle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      physician: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      reason: ['', [Validators.required]]
    });
  }
  get registerFormControl() {
    return this.schduleForm.controls;
  }
  
  onSubmit() {
    const RegisterData = {
      
      meetingTitle: this.schduleForm.controls.meetingTitle.value,
      description: this.schduleForm.controls.description.value,
      physician: this.schduleForm.controls.physician  .value,
      date: this.schduleForm.controls.date.value,
        time: this.schduleForm.controls.time.value,
        reason:this.schduleForm.controls.reason.value
      
    };
    console.log(RegisterData);
    this.scheduleService
    .meetingDetails(RegisterData)
      .subscribe((data: any) => {
        console.log(data);
        // if (data  !== null) {
        //   this.router.navigate(['']);
        // }
      });
  }

}
