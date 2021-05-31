import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProviderCreds } from '../models/provider-creds';
import { AlertService } from '../services/AlertService/alert.service';
import { LoginProviderService } from '../services/RegisterService/login-provider.service';

@Component({
  selector: 'app-login-provider',
  templateUrl: './login-provider.component.html',
  styleUrls: ['./login-provider.component.css']
})
export class LoginProviderComponent implements OnInit {

  user: ProviderCreds = {username: "", password: ""};
  form: FormGroup;
  submitted = false;
  loading = false;
  inboudClick = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registerService: LoginProviderService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f(){
    return this.form.controls;
  }

  createForm(){
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  
  onSubmit() {
  }

  loginProvider(){
    this.inboudClick= true;
  this.alertService.clear();

  if (this.form.invalid) {
      return;
  }

  this.registerService
        .CheckCreds(this.user.username, this.user.password)
        .subscribe((res) => {
          let name = res;
          if (name.username == this.user.username) {
            alert('Successfully logged in');
            this.router.navigate(['../ProviderDashboardComponent'], {
              relativeTo: this.route,
            });
          }
        },
          (error) => {
            alert(error.error);
          }
        );

  }
}
