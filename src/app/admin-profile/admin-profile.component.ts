import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute)
  {

  }

  _id;
  user ;
  username;
  firstName;
  lastName;
  email;

  update() {
    this.user.username = this.username;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;


    this.service.updateUser(this.user).then(user => this.user = user).then((() => alert('Details updated successfully!')));
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
  setUser(user)
  {
    console.log("PROFILE ID:"+this._id);
    console.log("POST USER:"+JSON.stringify(user));

    this.user=user;
    this.username=user.username;
    this._id = user._id;

    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    console.log("PROFILE USERNAME:"+this.username);
    console.log("PROF FIRST:"+this.firstName);
  }


  ngOnInit() {

    this.service
      .profile()
      .then(user => this.setUser(user));
  }

}
