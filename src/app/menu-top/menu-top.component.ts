import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  topMenu_c = 'fontMenuTop';
  topMenu_s = 'Subcategory';
  currentUrl: string;
  constructor(private route: Router) {
  }

  onClick(index) {
    if (index === '/kb021') {
      this.topMenu_c = 'fontMenuTop';
      this.topMenu_s = 'Subcategory';
      // console.log(index);
    } else if (index === '/Kb023') {
      this.topMenu_c = 'Subcategory';
      this.topMenu_s = 'fontMenuTop';
      // console.log(index);
    }
    // console.log(this.route.url);
  }

  ngOnInit() {
    console.log('On:' + this.route.url);
  }

}
