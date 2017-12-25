import { Component, OnInit, Output, EventEmitter, Injectable  } from '@angular/core';


@Component({
  selector: 'app-save-lists',
  templateUrl: './save-lists.component.html',
  styleUrls: ['./save-lists.component.css']
})

@Injectable()
export class SaveListsComponent implements OnInit {

  // @Output() m_header: EventEmitter<any> = new EventEmitter<any>();

  // SET: Header | Decsription
  headerText = 'บันทึกรายการ';
  description = 'สร้าง/บันทึก/ค้นหา/เปลี่ยนแปลง เอกสาร';
  m_header = 'เลือกรายการที่ต้องการ';

  kb_list: Boolean = false; // ระบบขอเบิก
  kb1: Boolean = false; // ขบ - ขอเบิก
  kb2: Boolean = false;
  kb3: Boolean = false;
  kb4: Boolean = false;
  kb5: Boolean = false;

  constructor() {
  }

  showMenu(menu) {
    if (menu === 'kb1') {
      this.kb1 = (this.kb1 === true ? false : true);
    } else if (menu === 'kb_list') {
      this.kb_list = (this.kb_list === true ? false : true);
    }
  }

  changeMenu(index) {
    if (index === 'kb') {
      this.m_header = 'ระบบเบิกจ่าย';
      // this.m_header.emit(this.t_header);
      console.log('lonk kb');
    } else {
      
    }
  }

  ngOnInit() {
    this.m_header = 'เลือกรายการที่ต้องการ';
  }

}
