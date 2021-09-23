import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { staffData } from '../app-common/data/hospitalStaff.data';
import { sideNavigationItem } from '../app-common/data/navigation.data';
import { patientData } from '../app-common/data/patient.data';
import { HospitalUser, Patient, SideNavigationItem } from '../app-common/models/navigation.model'
import { AdminService } from './service/admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loading: boolean = true;
  userData = [''];
  statuses: any;
  data: any;
  chartOptions: any;
  hospitalStaff: HospitalUser[] = staffData;
  patient: Patient[] = patientData;
  sideNavigationdata: SideNavigationItem[] = sideNavigationItem;
  constructor(
    private route: Router,
    private adminService : AdminService
  ) { }

  ngOnInit(): void {
    this.getUsersData();
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        type: 'line',
        label: 'Dataset 1',
        borderColor: '#42A5F5',
        borderWidth: 2,
        fill: false,
        data: [
          50,
          25,
          12,
          48,
          56,
          76,
          42
        ]
      }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: '#66BB6A',
        data: [
          21,
          84,
          24,
          75,
          37,
          65,
          34
        ],
        borderColor: 'white',
        borderWidth: 2
      }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: '#FFA726',
        data: [
          41,
          52,
          24,
          74,
          23,
          21,
          32
        ]
      }]
    };
    this.statuses = [
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' },
      { label: 'Blocked', value: 'Blocked' },
      this.loading=false,
    ]

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }
  onSubmitStatus(link1: any, id: any) {
    //function to change the status of the Patient by Admin i.e (Active/Inactice/Block)
    console.log('btn id', id);
    console.log('btn link', link1);
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
