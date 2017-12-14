import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-lists',
  templateUrl: './save-lists.component.html',
  styleUrls: ['./save-lists.component.css']
})
export class SaveListsComponent implements OnInit {

  // SET: Header | Decsription
  headerText = 'บันทึกรายการ';
  description = 'สร้าง/บันทึก/ค้นหา/เปลี่ยนแปลง เอกสาร';

  kb_list: Boolean = false; // ระบบขอเบิก
  kb1: Boolean = false; // ขบ - ขอเบิก
  kb2: Boolean = false;
  kb3: Boolean = false;
  kb4: Boolean = false;
  kb5: Boolean = false;

  constructor() { }

  showMenu(menu) {
    if (menu === 'kb1') {
      this.kb1 = (this.kb1 === true ? false : true);
    } else if (menu === 'kb_list') {
      this.kb_list = (this.kb_list === true ? false : true);
    }
  }

  ngOnInit() {
  }

}
