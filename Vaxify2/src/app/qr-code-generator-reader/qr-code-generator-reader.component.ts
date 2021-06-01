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
  percent: number;
  percent_e: number;
  duration: number;

  value = "";
  upload_value: string;
  scan_name: string;



  status = false;
  inboundClick = true;
  s_mode = true;

  current_user = "1"; //ssn
  scan_mode: string;
  pic_name = "pending_status";
  pic_name2 = "";


  pass: HTMLAudioElement = new Audio("../../assets/pass.mp3");
  fail: HTMLAudioElement = new Audio("../../assets/fail.mp3");
  click1: HTMLAudioElement = new Audio("../../assets/click1.mp3");
  click2: HTMLAudioElement = new Audio("../../assets/click2.mp3");

  imageData: ImageData;
  code: any;
  reset = new Blob();

  reader = new FileReader();
  pic = new Image();
  qr = new QrcodeDecoder();

  private patient: Patient;
  patient_status: string;
  val: string | ArrayBuffer;
  qr_id: number;

  private qr_record: QRrecord;
  private n_patient: Patient;
  qr_limit: number;
  show_timer: number;
  scan_time: number;
  qr_time: number;
  QRresult: any;



  constructor(private service: PatientService) {
    this.qr_record = new QRrecord();
    this.n_patient = new Patient();
  }



  checkQR(input): void {



    this.service.checkQR(input).subscribe(res => {
      console.log(res)
      this.scan_time = Date.now();
      this.qr_time=res.time_stamp;
      this.qr_id=res.qr_id;
      this.status=res.patient.status;
      this.scan_mode=res.patient.fullName;

      if (this.scan_time > this.qr_time) { //old qr
        this.deleteQR(this.qr_id)
        this.scan_mode="Expired"
        this.upload_value="Expired"
      }
      else{
        this.inboundClick = false;
        this.s_mode = true;
        if (this.upload_value == "vaccinated" || this.upload_value == "Fully Vaccinated") {
          this.playPass();
        }
        else {
          this.playFail();
        }

      }
        
    },error=>{
          console.log(error)
          this.scan_mode="Invalid"
        this.upload_value="Invalid"

    })

    


  }

  addQR(): void {

    this.service.addQR(this.qr_record).subscribe(res => {
      this.qr_record = new QRrecord();
      console.log(res)
      this.qr_id = res.qr_id;
      console.log(this.qr_id)
      this.value = '' + this.qr_id;

    })

  }

  deleteQR(input): void {

    this.service.deleteQR(input).subscribe(res => {

    })

  }

  playPass(): void {
    this.pass.load();
    this.pass.volume = 1;
    this.pass.play();
    this.pic_name = "verified_status"
    this.pic_name2 = "pass"
  }

  playFail(): void {

    this.fail.load();
    this.fail.volume = 1;
    this.fail.play();
    this.pic_name = "denied_status"
    this.pic_name2 = "fail"

  }


  uploadFile($event) { //also decodes QR
    this.scan_mode = "Scanned Value"
    this.reader.readAsDataURL($event.target.files[0]);
    console.log($event.target.files[0]);
    this.reader.onload = (_event) => {
      this.qr.decodeFromImage(this.reader.result)
        .then(res => {
          console.log(res)
          console.log(res.data)
          this.checkQR(res.data);

          //this.upload_value = res.data

          
          this.reader.readAsText(this.reset);
        });

    }

  }

  generateQR(): void {
    this.scan_mode = "Self Value";
    this.elementType = NgxQrcodeElementTypes.URL;
    this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

    this.service.generateQR(this.current_user).subscribe(res => {
      console.log(res.status)
      this.patient_status = res.status;
      this.upload_value = res.status;
      this.qr_record.ssn = res.customerSSN;

      this.n_patient.customerSSN = res.customerSSN;

      this.qr_record.patient = this.n_patient;

      this.qr_record.time_stamp = Date.now() + 60000;

      //this.value=res.status +'\n' + res.fullName +'\n'+this.qr_record.time_stamp;

      //this.QRresult=this.service.checkQR(this.qr_id);
      this.addQR();


      this.inboundClick = false;
      this.s_mode = false;
      this.scan_mode = res.fullName;
      if (this.upload_value == "vaccinated" || this.upload_value == "Fully Vaccinated") {

        this.pic_name = "verified_status"

      }
      else {

        this.pic_name = "denied_status"

      }

    })

    this.click2.load();
    this.click2.volume = 1;
    this.click2.play();
  }

  ngOnInit(): void {

    this.click1.load();
    this.click1.volume = 1;
    this.click1.play();
  }

}


