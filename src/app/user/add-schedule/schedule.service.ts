import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment, Employee, PatientInfo } from 'src/app/app-common/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
private apiUrl="http://localhost:8080/user/staff";
private patientUrl="http://localhost:8080/user/patient";
private appoinmentUrl="http://localhost:8080/user/appointment";
listOfStaff:Employee[]=[];
listOfPatient:PatientInfo[]=[];
listOfTimeSlot:string[]=[];
  constructor(private http:HttpClient) { }

// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

findAllStaffByRole(role:string):void{
  this.http.get<Employee[]>(this.apiUrl+"/role/${role}")
  .subscribe((employee)=>{
    this.listOfStaff.splice(0,this.listOfStaff.length);
    this.listOfStaff.push(...employee);
  })
}

getAllStaffByRole(role:string){
  this.findAllStaffByRole(role);
  return this.listOfStaff;
}

findAllPatient(){
  this.http.get<PatientInfo[]>(this.patientUrl)
  .subscribe((patient)=>{
    this.listOfPatient.splice(0,this.listOfPatient.length);
    this.listOfPatient.push(...patient);
  })
}

getAllPatient(){
  this.findAllPatient();
  return this.listOfPatient;
}

findAllSlotByDate(date:string):void{
  //let params = new HttpParams().set('date', date);
  this.http.get<string[]>(this.appoinmentUrl+"/slot?date="+date)
  .subscribe((timeSlot)=>{
    this.listOfTimeSlot.splice(0,this.listOfTimeSlot.length);
    this.listOfTimeSlot.push(...timeSlot);
  })
}

getAllAvailableSlot(date:string){
  this.findAllSlotByDate(date);
  return this.listOfTimeSlot;
}

createAppointment(appointment: Appointment):Observable<Appointment>{
  return this.http.post<Appointment>(this.appoinmentUrl, JSON.stringify(appointment),this.httpOptions);
  }

}
