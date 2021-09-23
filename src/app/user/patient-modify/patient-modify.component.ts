import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { userSideNavigationItem } from 'src/app/app-common/data/user.navigation.data';
//import { patientData } from 'src/app/app-common/data/user.patient.modify';
import { UserPatientModify, SideNavigationItem } from 'src/app/app-common/models';
import {PatientModifyService} from 'src/app/user/patient-modify.service';

@Component({
  selector: 'app-patient-modify',
  templateUrl: './patient-modify.component.html',
  styleUrls: ['./patient-modify.component.css']
})
export class PatientModifyComponent implements OnInit {

  userSideNavigationdata: SideNavigationItem[] = userSideNavigationItem;

  //patientData: UserPatientModify[] = patientData;
  statuses:any;
  loading: boolean=false;
  displayDialog:boolean=false;
  confirmText:string="";
  

//start of model attribute definition

  constructor(private patientModify:PatientModifyService) { }
  listOfAppointment: UserPatientModify[]=[];
  ngOnInit(): void {
    this.confirmText="";
     this.listOfAppointment= this.patientModify.getAllAppointment();
  console.log(this.listOfAppointment);
  }
  onDelete(){
    this.confirmText="";
    this.displayDialog=true;
    //console.log(item);
    //this.userData = this.userData.filter((obj: any) => obj !== item);
  }
  clear(table: Table) {
    table.clear();
  }
}

