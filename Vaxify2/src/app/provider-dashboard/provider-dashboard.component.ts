import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.css']
})
export class ProviderDashboardComponent implements OnInit {
  login_type:string;

  constructor() { }

  ngOnInit(): void {
    this.login_type=sessionStorage.getItem('login_type');
  }

}
