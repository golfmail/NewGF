import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})
export class FormHeaderComponent implements OnInit {

  @Input() headerText;
  @Input() description;

  constructor() {}

  ngOnInit() {
    // this.headerText = 'หัวข้อ';
    // this.discription = 'รายละเอียดหัวข้อ';
  }

}
