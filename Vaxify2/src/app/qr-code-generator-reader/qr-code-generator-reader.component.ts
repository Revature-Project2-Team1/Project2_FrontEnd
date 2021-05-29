import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code-generator-reader',
  templateUrl: './qr-code-generator-reader.component.html',
  styleUrls: ['./qr-code-generator-reader.component.css']
})
export class QrCodeGeneratorReaderComponent implements OnInit {
  elementType: NgxQrcodeElementTypes;
  correctionLevel: NgxQrcodeErrorCorrectionLevels;
  value: string;
  percent:number;
  percent_e: number;

  constructor() { }

  ngOnInit(): void {
  }

  verifyQR(): void{

  }

  generateQR(): void{

    
    this.inboundClick = false;

    this.elementType = NgxQrcodeElementTypes.URL;
    this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    this.value="THIS IS WHAT WILL BE IN THE QR CODE. IDEALLY JSON. PLAY AROUND WITH THIS TO SEE QR CHANGE";
    this.percent=100;
    this.percent_e=1;

    function sayHi() {
      this.percent_e=100;
    }
    function reset(){

    }
    setTimeout(sayHi, 6000);

    
  }

  formatTitle = (percent) : string => {
    if(percent >= 100){
      return "EXPIRED"
    }else if(percent > 0){
      return "Valid"
    }else {
      return "N/A"
    }
  }

  formatColor = (status: string) : string => {
    if(status=="EXPIRED"){
      return "#FF0000"
    }else if(status=="Valid"){
      return "#FFFFFF"
    }else {
      return "#FFFFFF"
    }
  }

  duration:number=6000;
  


  inboundClick = true;


  
}
