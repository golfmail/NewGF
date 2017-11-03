import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-login-profile',
  templateUrl: './user-login-profile.component.html',
  styleUrls: ['./user-login-profile.component.css']
})
export class UserLoginProfileComponent implements OnInit {

  UID = '030020000510';
  TIME = new Date();
  TIMELOGIN = this.TIME.getHours() + ':' + this.TIME.getMinutes() + ':' + this.TIME.getSeconds();

  constructor() {}

  ngOnInit() {
  }

}
