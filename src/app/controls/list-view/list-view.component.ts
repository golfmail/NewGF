import { Component, ElementRef, Input, OnInit, NgModule, OnChanges, Output, EventEmitter, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownListComponent } from 'app/controls/drop-down-list/drop-down-list.component';
import { Kb021Component } from 'app/kb02/kb02-1/kb02-1.component';
import { DropDownViewComponent } from 'app/controls/drop-down-view/drop-down-view.component';
import { Tab } from 'app/controls/drop-down-view/drop-down-view.interface';

// import { Kb021Component } from '/app/kb02/kb02-1/kb02-1.component';
// import { Kb021Component } from 'C:/Users/KTB_User/Documents/Angular/gfmis/demoweb/src/app/kb02/kb02-1/kb02-1.component';

// export class Hero {
//   id: number;
//   name: string;
// }

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit{
  // @Input() tabTitle;
  title = 'Tour of Heroes';
  title2 = 9;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // TEST
  // tabs: Tab[] = [];
  // @Output() selected = new EventEmitter();
  // addTab(tab: Tab) {
  //   if (!this.tabs.length) {
  //     // tab.selected = true;
  //   }
  //   this.tabs.push(tab);
  // }

  // selectTab(tab: Tab) {
  //   // console.log('Test log');
  //   this.tabs.map((tab) => {
  //     // console.log(tab);
  //     // tab.selected = false;
  //   })
  //   // tab.selected = true;
  //   this.selected.emit({selectedTab: tab});
  // }


  constructor( private Kb021Component: Kb021Component) {//, private DropDownViewComponent: DropDownViewComponent
    // if (typeof this.Kb021Component.saveTable !== 'undefined') {
    //   this.title2 = this.Kb021Component.saveTable.length;
    //   console.log(this.title2);
    //   console.log('Z');
    // } else {
    //   console.log('U');
    // }

  }

// @Output() myEvent = new EventEmitter();
// this.myEventd.emit({selectedTab: tab});
// formSave2(Kb021Component: Kb021Component) {
//     // saveTable = [['Saab', 'Volvo'], ['BMW', 'Toyota']];
//     // console.log('Array: ' + saveTable.length);
//     if (typeof this.Kb021Component.saveTable === 'undefined') {
//         // alert('undefined')
//         this.Kb021Component.saveTable = [{
//           TBFISTL: this.Kb021Component.TBFISTL,
//           LBZZPMT: this.Kb021Component.LBZZPMT,
//           TBFKBER: this.Kb021Component.TBFKBER,
//           TBKOSTL: this.Kb021Component.TBKOSTL,
//           TBHKONT: this.Kb021Component.TBHKONT,
//           tbSearch_term: this.Kb021Component.tbSearch_term,
//           TBWRBTR: this.Kb021Component.TBWRBTR,
//           }]
//         // alert(this.Kb021Component.saveTable.length);
//     } else {
//         this.Kb021Component.saveTable.push({
//           TBFISTL: this.Kb021Component.TBFISTL,
//           LBZZPMT: this.Kb021Component.LBZZPMT,
//           TBFKBER: this.Kb021Component.TBFKBER,
//           TBKOSTL: this.Kb021Component.TBKOSTL,
//           TBHKONT: this.Kb021Component.TBHKONT,
//           tbSearch_term: this.Kb021Component.tbSearch_term,
//           TBWRBTR: this.Kb021Component.TBWRBTR,
//           });
// }
//         // console.log(this.Kb021Component.saveTable);
// }


  // constructor(private dropDownListComponent: DropDownListComponent, private elRef: ElementRef) {
  //   this.test = this.elRef.nativeElement;
  //   this.value = this.elRef.nativeElement.innerText;
  // }
  ngOnInit() {
    // this.DropDownViewComponent.addTab(this);
    //   if (typeof this.Kb021Component.saveTable !== 'undefined') {
    //   this.title = this.Kb021Component.saveTable[0];
    //   console.log(this.title);
    // } else {
    //   console.log('X');
    // }
    // this.title2 = this.Kb021Component.saveTable.length;
    // this.dropDownListComponent.addItem2(this);
    // this.Kb021Component.formSave();
  }


}





