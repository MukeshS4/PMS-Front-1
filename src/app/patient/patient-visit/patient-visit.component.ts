import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { patientSideNavigationItem } from 'src/app/app-common/data/patientNavigation';
import { SideNavigationItem } from 'src/app/app-common/models';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CustomvalidationService } from '../customvalidation.service';
import { PatientService } from '../patient.service';
import { PatientVisitService } from './patientvisit.service';

@Component({
  selector: 'app-patient-visit',
  templateUrl: './patient-visit.component.html',
  styleUrls: ['./patient-visit.component.css'],
})
export class PatientVisitComponent implements OnInit {
  sideNavigationdata: SideNavigationItem[] = patientSideNavigationItem;
  PvisitForm!: FormGroup;
  submitted!: boolean;
  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private patientVisitSerice: PatientVisitService
  ) {}

  ngOnInit(): void {
    this.PvisitForm = this.fb.group({
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      bloodPressure: ['', [Validators.required]],
      bodyTemp: ['', [Validators.required]],
      respirationRate: ['', [Validators.required]],
      diagnosisCd: ['', [Validators.required]],
      diagnosisDesc: ['', [Validators.required]],
      diagnosisIsDepricated: ['', [Validators.required]],
      procedureCd: ['', [Validators.required]],
      procedureDesc: ['', [Validators.required]],
      procedureIsDepricated: ['', [Validators.required]],
      drugID: ['', [Validators.required]],
      drugName: ['', [Validators.required]],
      drugGenName: ['', [Validators.required]],
      drugBrandName: ['', [Validators.required]],
      drugForm: ['', [Validators.required]],
      drugStrength: ['', [Validators.required]],
    });
  }
  get registerFormControl() {
    return this.PvisitForm.controls;
  }
  onSubmit() {
    const RegisterData = {
      vital_signs: {
        height: this.PvisitForm.controls.height.value,
        weight: this.PvisitForm.controls.weight.value,
        blood_pressure: this.PvisitForm.controls.bloodPressure.value,
        body_temp: this.PvisitForm.controls.bodyTemp.value,
        respiration_rate: this.PvisitForm.controls.respirationRate.value,
      },
      diagnosis: {
        diagnosis: this.PvisitForm.controls.diagnosisCd.value,
        description: this.PvisitForm.controls.diagnosisDesc.value,
        diagnosisIsDepricated:
          this.PvisitForm.controls.diagnosisIsDepricated.value,
      },
      Procedures: {
        procedures: this.PvisitForm.controls.procedureCd.value,
        description: this.PvisitForm.controls.procedureDesc.value,
      
      },
      medication: {
        drugID: this.PvisitForm.controls.drugID.value,
        drugName: this.PvisitForm.controls.drugName.value,
        drugGenName: this.PvisitForm.controls.drugGenName.value,
        drugBrandName: this.PvisitForm.controls.drugBrandName.value,
        drugForm: this.PvisitForm.controls.drugForm.value,
        drugStrength: this.PvisitForm.controls.drugStrength.value,
      },
    };
    console.log(RegisterData);
    this.submitted=true;
    if(this.PvisitForm.valid){
    this.patientVisitSerice
      .patientVisitDetails(RegisterData)
      .subscribe((data) => {
        console.log(data);
        alert("Data saved successfully");
        // if (data  !== null) {
        //   this.router.navigate(['']);
        // }
      });
    }
  }
}
