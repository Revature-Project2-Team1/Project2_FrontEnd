import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientService } from '../services/PatientService/patient.service';
import jsQR from "jsqr";
import QrcodeDecoder from 'qrcode-decoder';


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
  upload_value:string;
  animation=true;
  color=""
  status=false;
  inboundClick=true;
  
  current_user="2"; //ssn

  pass:HTMLAudioElement= new Audio("../../assets/pass.mp3");
  fail:HTMLAudioElement=new Audio("../../assets/fail.mp3");
  
  imageData:ImageData;
  code:any;
  
  reader = new FileReader();
  pic= new Image();
  qr= new QrcodeDecoder();

 private patient: Patient;
  patient_status: string;
  val: string | ArrayBuffer;
  constructor(private service: PatientService) { 

  }



  verifyQR(): void{
    

     this.code = jsQR(this.imageData.data, 250,250);

  }
  
  uploadFile($event) { //also decodes QR
    this.reader.readAsDataURL($event.target.files[0]);
    this.reader.onload = (_event) => {  
      this.qr.decodeFromImage(this.reader.result)
      .then(res=> {
        console.log(res.data)
        this.upload_value=res.data
        if(this.upload_value=="Vaccinated"){
            this.pass.load();
            this.pass.volume=1;
            this.pass.play();   
            alert("Vaccinated!")
        }
        else{
          this.fail.load();
          this.fail.volume=1;
          this.fail.play();   
          alert("Not Vaccinated!")
        }
      });
        
    } 

}

  generateQR(): void{
    this.inboundClick = false;
    

    
    this.fail.load();
    this.fail.volume=1;
    this.fail.play();   
    
    
   
  }

  ngOnInit(): void {
    this.elementType = NgxQrcodeElementTypes.URL;
    this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

    this.service.generateQR(this.current_user).subscribe(res => {
      this.patient=res;
      console.log(this.patient);
      console.log("test")
      this.patient_status=this.patient.status;
      this.value=this.patient_status;


  })

  }

  

  
}


