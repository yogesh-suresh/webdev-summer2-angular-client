import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  message: String;
  username;
  password;
  credentials;
  user:{};

  login(username, password) {
    this.username=username;
    this.password=password;
    this.service
      .login(username, password)
      .then(user => this.credentials = user)
      .then(() => this.check_login(this.credentials));

  }

  check_login(credentials)
  {
    if(credentials.user=="Invalid User" || this.password==undefined || this.username==undefined)
      alert('Enter Correct Credentials');
    else if(credentials.username== "admin")
      this.router.navigate(['user-admin']);
    else
      this.router.navigate(['profile']);

  }

  constructor(private router: Router,
              private service: UserServiceClient) { }
  ngOnInit() {
  }

}
