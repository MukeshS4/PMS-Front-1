import { Component, OnInit } from '@angular/core';
import { sideNavigationItem } from 'src/app/app-common/data/navigation.data';
import { patientData } from 'src/app/app-common/data/patient.data';
import { Patient, SideNavigationItem } from 'src/app/app-common/models';
import { AdminService } from '../service/admin.service';
import { Table } from 'primeng/table';
import { AuthService } from 'src/app/auth/service/auth.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  loading: boolean = true;
  userData = [''];
  statuses: any;
  data: any;
  successModalBlock = false;
  successModalDeactivate = false;
  successModalActivate=false;
  patient: Patient[] = patientData;
  sideNavigationdata: SideNavigationItem[] = sideNavigationItem;

  constructor(private adminService : AdminService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUsersData();
    this.statuses = [
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' },
      { label: 'Blocked', value: 'Blocked' },
      this.loading = false,
    ]
  }

  onSubmitStatus(item:any) {
    console.log('btn link', item);
  }

  getUsersData(){
    this.adminService.getAllUsers().subscribe(
      data=>{
        if(data !== null){
          this.userData = data;
        }
      },error =>{
        this.userData = ["No Recods Found"];
      }
    )
  }

  onUserSubmitBlock(emailId:string){
    this.authService.lockAccount(emailId).subscribe(
      data=>{
        if(data!== null){
          this.successModalBlock=true;
          this.getUsersData();
        }
      },error=>{
        console.log("error in blocking user");
      }
    )
    console.log(emailId);
  }
  
  onUserSubmitDeactivate(emailId:string){
    this.adminService.deActivate(emailId).subscribe(
      data=>{
        if(data!== null){
          this.successModalDeactivate=true;
          this.getUsersData();
        }
      },error=>{
        console.log("error in blocking user");
      }
    )
  }

  onUserSubmitActivate(emailId:string){
    this.adminService.activate(emailId).subscribe(
      data=>{
        if(data!== null){
          this.successModalActivate=true;
          this.getUsersData();
        }
      },error=>{
        console.log("error in blocking user");
      }
    )
  }

  onSubmitEditPatient(item: any) {
    console.log(item);
  }

  onSubmitEditStaff(item: any) {
    console.log(item);
  }

  clear(table: Table) {
    table.clear();
  }

}
