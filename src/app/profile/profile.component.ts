import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this._id=(params['userId']));
  }

  _id;
  user ;
  username;
  firstName;
  lastName;
  email;
  sections = [];

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

  whiteboard()
  {
    this.router.navigate(['/home']);
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


  unroll(section) {
    // alert(section._id);
    this.sectionService
      .unrollStudentInSection(section._id)
      .then(() => {
        this.sectionService
          .findSectionsForStudent()
          .then(sections => this.sections = sections );
      });
  }


  ngOnInit() {

    this.service
      .profile()
      .then(user => this.setUser(user));

    //this.username = user.username);
    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );

  }

}
