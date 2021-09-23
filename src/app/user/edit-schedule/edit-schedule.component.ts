import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userSideNavigationItem } from 'src/app/app-common/data/user.navigation.data';
import { SideNavigationItem } from 'src/app/app-common/models';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  userSideNavigationdata : SideNavigationItem[] = userSideNavigationItem;

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onEdit(){
    alert('Appointment Edited Successfully');
    this.router.navigateByUrl('/user/patientmodify');
  }

}
