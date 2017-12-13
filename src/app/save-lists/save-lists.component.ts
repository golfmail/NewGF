import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-lists',
  templateUrl: './save-lists.component.html',
  styleUrls: ['./save-lists.component.css']
})
export class SaveListsComponent implements OnInit {

  kb: Boolean = false; // ขบ - ขอเบิก

  constructor() { }

  showMenu(menu) {
    if (menu === 'kb') {
      this.kb = (this.kb === true ? false : true);
    }
  }

  ngOnInit() {
  }

}
