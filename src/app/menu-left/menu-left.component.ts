import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {
  private _header;

  @Input() set header(header: String) {
    this.chk(header);
  }

  LINK_HOME = '/';
  KB: Boolean;

  chk(i) {
    console.log(i);
    this._header = i;
    switch (i) {
      case 'เลือกรายการที่ต้องการ':
        console.log(i);
        this.disableAll();
        this.KB = false;
        break;
    
      default:
      this.disableAll();
        break;
    }
  }
  disableAll  () {
    this.KB = false;
}  



  constructor() {}

  ngOnInit() {
    // this.t_header = 'เลือกรายการที่ต้องการ';
  }


}
