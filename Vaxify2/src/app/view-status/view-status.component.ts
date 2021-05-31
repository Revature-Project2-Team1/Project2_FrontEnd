import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Patient } from '../models/patient';
import { AlertService } from '../services/AlertService/alert.service';
import { ViewStatusService} from '../services/view-status-service/view-status.service';
import {first} from 'rxjs/operators';
import { VaccineRecord } from '../models/vaccine-record';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {
  status:string;
  loading = false;
  patient: Object;
  responses:VaccineRecord[];
  //ssn = sessionStorage.getItem("patient");
  ssn="123-12-1234";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewStatusService: ViewStatusService,
    private alertService: AlertService
    ) { }

  ngOnInit(){
    
    this.loading = true;
    console.log(this.ssn);
    this.viewStatusService.viewStatus(this.ssn)
    .pipe(first())
        .subscribe((patient:Patient) =>{
            console.log(patient);
            this.status = patient.status;
            console.log(status);
        });
    
    this.viewStatusService.getAllRecords(this.ssn)
    .subscribe(result=>{
      this.responses = result;
    });
    
      
    }    

}
