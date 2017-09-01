import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kb02-3',
  templateUrl: './kb02-3.component.html',
  styleUrls: ['./kb02-3.component.css']
})
export class Kb023Component implements OnInit {

  constructor() {}
  onSearch() {
    console.log('OnSearch');
  }

  ngOnInit() {
  }

}
