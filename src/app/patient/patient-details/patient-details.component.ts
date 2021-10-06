import { Component, Input, OnInit } from '@angular/core';
import { demographies } from '../patient-details';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  @Input() id:any;
  posts: demographies[]=[] ;
  constructor(public postService: PatientService) { }

  ngOnInit(): void {
    // this.postService.getAll(this.id).subscribe((data: any)=>{
    //   console.log(data);
    //   this.posts = data;
    //   console.log(this.posts);
    // })  
    console.log("Hit1");
    
    this.postService.getAll(this.id).subscribe((data: any)=>{
      console.log(data);
      var p = [];
      p.push(data);
      this.posts =   p;
    })
  }

}
