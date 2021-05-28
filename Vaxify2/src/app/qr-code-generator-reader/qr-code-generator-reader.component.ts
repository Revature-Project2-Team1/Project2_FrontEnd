import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code-generator-reader',
  templateUrl: './qr-code-generator-reader.component.html',
  styleUrls: ['./qr-code-generator-reader.component.css']
})
export class QrCodeGeneratorReaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  verifyQR(): void{

  }

  generateQR(): void{
    
  }

  formatTitle = (percent: number) : string => {
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

}
