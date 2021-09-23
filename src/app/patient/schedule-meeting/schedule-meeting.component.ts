import { Component, OnInit } from '@angular/core';
import { patientSideNavigationItem } from 'src/app/app-common/data/patientNavigation';
import { SideNavigationItem } from 'src/app/app-common/models';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent implements OnInit {

  sideNavigationdata : SideNavigationItem[] = patientSideNavigationItem;
  constructor() { }

  ngOnInit(): void {
  }

}
