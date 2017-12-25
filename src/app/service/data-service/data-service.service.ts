import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DataServiceService {

  onGetData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  getData() {
    
  }

}
