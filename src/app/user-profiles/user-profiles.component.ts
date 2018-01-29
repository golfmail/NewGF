import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {

  constructor() {}

  firstname = 'สมชาย';
  lastname  = 'ใจดี';
  position  = 'ผู้บันทึกข้อมูล';
  institution  = 'สำนักบริการกลาง';

  ngOnInit() {
  }

}
