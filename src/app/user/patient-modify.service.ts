import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Appointment, Employee, UserPatientModify} from 'src/app/app-common/models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientModifyService {
  listOfAppointment:UserPatientModify[]=[];
  listOfTimeSlot:string[]=[];
  appointment:any;
  private apiUrl="http://localhost:8080/user/appointment";
  constructor(private http:HttpClient) {
    this.findAll;
   }

   // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })
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

  getAppointmentById(appointmentId:number){
    return this.http.get<UserPatientModify>(this.apiUrl+"/"+appointmentId);
  }
  findAllSlotByDate(date:string):void{
    this.http.get<string[]>(this.apiUrl+"/slot?date="+date)
    .subscribe((timeSlot)=>{
      this.listOfTimeSlot.splice(0,this.listOfTimeSlot.length);
      this.listOfTimeSlot.push(...timeSlot);
    })
  }
  getAllAvailableSlot(date:string){
    this.findAllSlotByDate(date);
    return this.listOfTimeSlot;
  }
  updateAppointment(appointment: UserPatientModify):Observable<UserPatientModify>{
    return this.http.put<UserPatientModify>(this.apiUrl, JSON.stringify(appointment),this.httpOptions);
    }
  cancelAppointment(id:number,reason:string){
    return this.http.delete(this.apiUrl+"/"+id+"?reason="+reason,this.httpOptions);
  }
}
