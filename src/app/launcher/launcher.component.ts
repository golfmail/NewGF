import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent implements OnInit {

  @Input() m_header;

  LINK_HOME = '/';
  // m_header: String;

  constructor() { }

  handleUserUpdated(index) {
    const value = index;
    this.m_header = 'เลือกรายการที่ต้องการ';
    if (value.m_header !== undefined) { this.m_header = value.m_header; }
  }

  ngOnInit() {
    this.m_header = 'เลือกรายการที่ต้องการ';
  }

}
