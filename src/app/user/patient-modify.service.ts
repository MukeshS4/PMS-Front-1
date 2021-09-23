import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from "@angular/common/http";
import { UserPatientModify} from 'src/app/app-common/models';
import { patientData } from 'src/app/app-common/data/user.patient.modify';
@Injectable({
  providedIn: 'root'
})
export class PatientModifyService {
  listOfAppointment:UserPatientModify[]=[];
private apiUrl="http://localhost:8080/user/appointment"
  constructor(private http:HttpClient) {
    this.findAll;
   }
   findAll(){
    this.http
    .get<UserPatientModify[]>(this.apiUrl)
    .subscribe((listOfAppointment) => {
      this.listOfAppointment.splice(0, this.listOfAppointment.length); // Clear array
      this.listOfAppointment.push(...listOfAppointment); // add new element
    });
   }
   getAllAppointment() {
     this.findAll();
    return this.listOfAppointment;
  }
}
