import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientService } from '../services/PatientService/patient.service';
import jsQR from "jsqr";


@Component({
  selector: 'app-qr-code-generator-reader',
  templateUrl: './qr-code-generator-reader.component.html',
  styleUrls: ['./qr-code-generator-reader.component.css']
})
export class QrCodeGeneratorReaderComponent implements OnInit {
  elementType: NgxQrcodeElementTypes;
  correctionLevel: NgxQrcodeErrorCorrectionLevels;
  percent:number;
  percent_e: number;
  duration:number;
  
  value="";
  animation=true;
  color=""
  status=false;
  inboundClick=true;
  
  current_user="2"; //ssn

  pass:HTMLAudioElement= new Audio("../../assets/pass.mp3");
  fail:HTMLAudioElement=new Audio("../../assets/fail.mp3");
  
 

 private patient: Patient;
  patient_status: string;
  constructor(private service: PatientService) { 

  }



  verifyQR(): void{

  }
  uploadFile($event) {
    console.log($event.target.files[0]); // outputs the first file
}

  generateQR(): void{
    this.inboundClick = false;
    
    
    this.service.generateQR(this.current_user).subscribe(res => {
      this.patient=res;
      console.log(this.patient);
      console.log("test")
      this.patient_status=this.patient.status;


  })

    
  this.fail.load();
  this.fail.volume=1;
    this.fail.play();
    this.animation=!this.animation;
   
    this.elementType = NgxQrcodeElementTypes.URL;
    this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    this.value=this.patient_status;
    function runC() {
    
      
    }
  
    setTimeout(runC, 6000); 
  }

  ngOnInit(): void {
   

  }

  
}
