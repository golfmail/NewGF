import { Component, ElementRef, Input, OnInit, NgModule, OnChanges, Output, EventEmitter, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  title = 'Tour of Heroes';
  title2 = 9;

  constructor() {

  }
  ngOnInit() {
  }


}





