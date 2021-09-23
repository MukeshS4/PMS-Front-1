import { Component, OnInit } from '@angular/core';
import { patientLockedData, staffLockedData } from 'src/app/app-common/data/locked.data';
import { sideNavigationItem } from 'src/app/app-common/data/navigation.data';
import { PatientLockedAccounts, SideNavigationItem, StaffLockedAccounts } from 'src/app/app-common/models';
import { AdminService } from '../service/admin.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent implements OnInit {
  userBlockedData = [''];
  patientBlockedData = [''];
  sideNavigationdata: SideNavigationItem[] = sideNavigationItem;
  patientLockedData: PatientLockedAccounts[] = patientLockedData;
  staffLockedData: StaffLockedAccounts[] = staffLockedData;
  loading: boolean = true;
  statuses: any;
  successModal = false;
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this. getAllBlockedUsers();
    this.statuses = [
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' },
      { label: 'Blocked', value: 'Blocked' },
      this.loading = false,
    ]
  }
  getAllBlockedPatients(){
    // this.adminService.getAllBlockedPatients().subscribe(
    //   data=>{
    //     if(data !== null){
    //       this.userBlockedData = data;
    //     }
    //   },error =>{
    //     this.userBlockedData = ["No Recods Found"];
    //   }
    // )
  }
  getAllBlockedUsers(){
    this.adminService.getAllBlockedUsers().subscribe(
      data=>{
        if(data !== null){
          this.userBlockedData = data;
        }
      },error =>{
        this.userBlockedData = ["No Recods Found"];
      }
    )
  }

  onSubmitUnlockUser(emailId:string){
    this.adminService.unBlockUser(emailId).subscribe(
      data=>{
        if(data !== null){
          this.userBlockedData = data;
          this.getAllBlockedUsers();
          this.successModal=true;
        }
      },error =>{
        this.userBlockedData = ["No Recods Found"];
      }
    )

  }

  onSubmitUnlockPatient(item:any){

  }

  clear(table: Table) {
    table.clear();
  }

  
}
