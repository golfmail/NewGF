import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DropDownListComponent } from 'app/controls/drop-down-list/drop-down-list.component';

@Component({
  selector: 'ListItem',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input()
  value: string;
  test;

  constructor(private dropDownListComponent: DropDownListComponent, private elRef: ElementRef) {
    this.test = this.elRef.nativeElement;
    this.value = this.elRef.nativeElement.innerText;
  }

  ngOnInit() {
    this.dropDownListComponent.addItem(this);
  }
}