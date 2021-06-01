import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientService } from '../services/PatientService/patient.service';
import QrcodeDecoder from 'qrcode-decoder';
import { timestamp } from 'rxjs/operators';
import { QRrecord } from '../models/qrrecord';


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
  scan_name:string;



  status=false;
  inboundClick=true;
  s_mode=true;
  
  current_user="3"; //ssn
  scan_mode:string;
  pic_name="pending_status";
  pic_name2="";


  pass:HTMLAudioElement= new Audio("../../assets/pass.mp3");
  fail:HTMLAudioElement=new Audio("../../assets/fail.mp3");
  click1:HTMLAudioElement= new Audio("../../assets/click1.mp3");
  click2:HTMLAudioElement= new Audio("../../assets/click2.mp3");
  
  imageData:ImageData;
  code:any;
  reset= new Blob();
  
  reader = new FileReader();
  pic= new Image();
  qr= new QrcodeDecoder();

  private patient: Patient;
  patient_status: string;
  val: string | ArrayBuffer;

  private qr_record:QRrecord;
  private n_patient: Patient;

  constructor(private service: PatientService) { 
    this.qr_record=new QRrecord();
    this.n_patient=new Patient();
  }



  checkQR(): void{
    

  }

  addQR(): void{

    this.service.addQR(this.qr_record).subscribe(res=>{
      this.qr_record=new QRrecord();
      console.log(res)

    })

  }

  deleteQR(): void{

    this.service.deleteQR(this.current_user).subscribe(res => {

    })
    
  }

  playPass(): void{
    this.pass.load();
    this.pass.volume=1;
    this.pass.play();   
    this.pic_name="verified_status"
    this.pic_name2="pass"
  }

  playFail(): void{

  this.fail.load();
  this.fail.volume=1;
  this.fail.play();   
  this.pic_name="denied_status"
  this.pic_name2="fail"


  }
  
  uploadFile($event) { //also decodes QR
    this.scan_mode="Scanned Value"
    this.reader.readAsDataURL($event.target.files[0]);
    console.log($event.target.files[0]);
    this.reader.onload = (_event) => {  
      this.qr.decodeFromImage(this.reader.result)
      .then(res=> {
        console.log(res)
        console.log(res.data)
        this.upload_value=res.data
        this.inboundClick = false; 
      this.s_mode=true;
        if(this.upload_value=="vaccinated"|| this.upload_value=="Fully Vaccinated"){
            this.playPass();
        }
        else{
          this.playFail();
        }
        this.reader.readAsText(this.reset);
      });
        
    } 

}

  generateQR(): void{
    this.scan_mode="Self Value";
    this.elementType = NgxQrcodeElementTypes.URL;
    this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

    this.service.generateQR(this.current_user).subscribe(res => {
      console.log(res.status)
      this.patient_status=res.status;
      this.upload_value=res.status;
      this.qr_record.ssn=res.customerSSN;

      this.n_patient.customerSSN=res.customerSSN;

      console.log(this.n_patient);

      this.qr_record.patient=this.n_patient;

      console.log(this.qr_record)

      this.qr_record.time_stamp=Date.now();

      this.value=res.status +'\n' + res.fullName +'\n'+this.qr_record.time_stamp;

      this.addQR();

      this.inboundClick = false; 
      this.s_mode=false;
      this.scan_mode=res.fullName;
      if(this.upload_value=="vaccinated"|| this.upload_value=="Fully Vaccinated"){
        
        this.pic_name="verified_status"

    }
    else{
      
      this.pic_name="denied_status"

    }
  })

    this.click2.load();
    this.click2.volume=1;
    this.click2.play(); 
  }

  ngOnInit(): void {
 
    this.click1.load();
    this.click1.volume=1;
    this.click1.play(); 
  }
  
}


