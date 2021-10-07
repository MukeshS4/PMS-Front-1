import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { patientSideNavigationItem } from '../app-common/data/patientNavigation';
import { SideNavigationItem } from '../app-common/models';
import { AppModule } from '../app.module';
import { CustomvalidationService } from './customvalidation.service';
import { PatientService } from './patient.service';
import * as moment from 'moment';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  formScreen =true;
  detailsScreen = false;
  patientId:any;
  dateOfBirth:any;
  sideNavigationdata: SideNavigationItem[] = patientSideNavigationItem;
  PdetailsForm!: FormGroup;
  EmergencyForm!: FormGroup;
  pmsDetailsService = 'pmsDetails/';
  // model: NgbDateStruct;
  submitted = false;
  age: any;
  showAge!: number;
  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private patientService: PatientService,
    private router: Router,
    private config: AppModule
  ) {
    // customize default values of datepickers used by this component tree
    // config.minDate = {year: 1900, month: 1, day: 1};
    // config.maxDate = {year: 2099, month: 12, day: 31};
    // // days that don't belong to current month are not visible
    // config.outsideDays = 'hidden';
    // // weekends are disabled
    // config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;
    // // setting datepicker popup to close only on click outside
    // config.autoClose = 'outside';
    // // setting datepicker popup to open above the input
    // config.placement = ['top-left', 'top-right'];
  }

  ngOnInit(): void {
    this.PdetailsForm = this.fb.group({
      title: ['', [Validators.required]],
      firstName: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.nameValidator(),
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.nameValidator(),
        ]),
      ],
      dateOfBirth: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      race: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.nameValidator(),
        ]),
      ],
      ethnicity: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.nameValidator(),
        ]),
      ],
      languages: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.nameValidator(),
        ]),
      ],
      emailId: ['', [Validators.required, Validators.email]],
      address: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.addressValidator(),
        ]),
      ],
      country: ['', [Validators.required]],
      phno: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.phValidator(),
        ]),
      ],

      efirstName: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.nameValidator(),
        ]),
      ],
      elastName: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.nameValidator(),
        ]),
      ],
      relationship: ['', [Validators.required]],
      eemail: ['', [Validators.required, Validators.email]],
      ecountry: ['', [Validators.required]],
      ephno: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.phValidator(),
        ]),
      ],
      eaddress: new FormControl(''),
      Pportal: new FormControl(''),
      allergies: new FormControl(''),
      allergyid: new FormControl(''),
      allergytype: new FormControl(''),
      allergyname: new FormControl(''),
      allergydescription: new FormControl(''),
      allergyc: new FormControl(''),
    });
  }

  get registerFormControl() {
    return this.PdetailsForm.controls;
  }
  // onSubmitp() {
  //   this.submitted = true;
  //   if (this.PdetailsForm.valid) {
  //     this.patientService.patientDetails(this.PdetailsForm).subscribe(
  //       response=>{
  //         console.log(response);

  //       },
  //       error=>{
  //         console.log(error);

  //       }
  //     )
  //     alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  //     console.table(this.PdetailsForm.value);
  //   }
  // }
  onSubmitp() {
    const RegisterData = {
      demographies: {
        title: this.PdetailsForm.controls.title.value,
        first_name: this.PdetailsForm.controls.firstName.value,
        last_name: this.PdetailsForm.controls.lastName.value,
        date_of_birth: this.PdetailsForm.controls.dateOfBirth.value,
        age: this.PdetailsForm.controls.age.value,
        gender: this.PdetailsForm.controls.gender.value,
        race: this.PdetailsForm.controls.race.value,
        ethinicity: this.PdetailsForm.controls.ethnicity.value,
        language: this.PdetailsForm.controls.languages.value,
        email: this.PdetailsForm.controls.emailId.value,
        home_address: this.PdetailsForm.controls.address.value,
        country_code: this.PdetailsForm.controls.country.value,
        contact_number: this.PdetailsForm.controls.phno.value,
        emergency_contact_details: {
          e_first_name: this.PdetailsForm.controls.efirstName.value,
          e_last_name: this.PdetailsForm.controls.elastName.value,
          relationship: this.PdetailsForm.controls.relationship.value,
          email_address: this.PdetailsForm.controls.eemail.value,
          ecountry: this.PdetailsForm.controls.ecountry.value,
          contact: this.PdetailsForm.controls.ephno.value,
          address: this.PdetailsForm.controls.eaddress.value,
          patient_portal_access: this.PdetailsForm.controls.Pportal.value,
        },
      },
      allergies: {
        allergies: this.PdetailsForm.controls.allergies.value,
        allergyid: this.PdetailsForm.controls.allergyid.value,
        type: this.PdetailsForm.controls.allergytype.value,
        allergyname: this.PdetailsForm.controls.allergyname.value,
        allergydescription: this.PdetailsForm.controls.allergydescription.value,
        allergyc: this.PdetailsForm.controls.allergyc.value,
      },
    };
    this.submitted=true;
    console.log(RegisterData);

    // if(this.PdetailsForm.valid){

    this.patientService.patientDetails(RegisterData).subscribe((data) => {
      console.log(data);
      this.patientId=data.id;

      alert("Data saved successfully");
      this.detailsScreen=true;
      this.formScreen=false;
     // const url='patientDetails/'
      // /this.router.navigateByUrl(this.config.resourceUrl + this.pmsDetailsService + url+data.id)
      //this.router.navigate(['/patient-details/'+data.id]);
      // if (data  !== null) {
      //   this.router.navigate(['']);
      // }
    });
  //}
  }
  status: boolean = false;
  clickEvent() {
    this.status = false;
  }
  clickEvent1() {
    this.status = true;
  }
  calculateage(){
    console.log('dateOfBirth',this.dateOfBirth);
    var todaysDate  =moment(new Date());
    var dob = moment(new Date(this.dateOfBirth));
    console.log(todaysDate);
    console.log(dob);
    var duration =moment.duration(todaysDate.diff(dob));
    console.log(duration);
    this.age=duration.years();
    console.log(this.age);
  }
  
}
