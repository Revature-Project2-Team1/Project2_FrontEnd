import { Component, OnInit } from '@angular/core';
import { ProviderCreds } from '../models/provider-creds';

@Component({
  selector: 'app-login-provider',
  templateUrl: './login-provider.component.html',
  styleUrls: ['./login-provider.component.css']
})
export class LoginProviderComponent implements OnInit {

  user: ProviderCreds = {username: "", password: ""};
  
  constructor() { }

  ngOnInit(): void {
  }

  checkCred(): void{
    console.log(this.user.username);
    console.log(this.user.password);
  }
}
