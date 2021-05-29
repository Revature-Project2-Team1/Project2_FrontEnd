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
  percent:number;
  percent_e: number;
  duration:number;
  
  value="";
  animation=true;
  color=""
  status=false;
  inboundClick=true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verifyQR(): void{

  }
  uploadFile($event) {
    console.log($event.target.files[0]); // outputs the first file
}

  generateQR(): void{

    
    this.inboundClick = false;

    this.animation=!this.animation;
   
    this.elementType = NgxQrcodeElementTypes.URL;
    this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    this.value="THIS IS WHAT WILL BE IN THE QR CODE. IDEALLY JSON. PLAY AROUND WITH THIS TO SEE QR CHANGE"+this.animation;
    
    function runC() {
    
      
    }
  
    setTimeout(runC, 6000); 
  }



  
}
