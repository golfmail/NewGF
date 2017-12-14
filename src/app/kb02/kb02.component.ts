import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kb02',
  templateUrl: './kb02.component.html',
  styleUrls: ['./kb02.component.css']
})
export class Kb02Component implements OnInit {

  // SET: Header | Decsription
  headerText = 'ขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ (ขบ. 02)';
  description = 'สร้างขอเบิกเงินงบประมาณที่ไม่อ้างใบสั่งซื้อฯ';

  constructor() {}

  updateHeader(_description) {
    this.description = _description;
  }

  ngOnInit() {
  }

}
