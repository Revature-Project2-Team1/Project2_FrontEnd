import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  ssn:string;
  constructor() { }

  ngOnInit(): void {
    this.ssn=sessionStorage.getItem('patient');

  }

}
