import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-control-value-base',
  templateUrl: './control-value-base.component.html',
  styleUrls: ['./control-value-base.component.css']
})
export class ControlValueBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



const noop = () => {
};

//export const TEXT_BOX_CONTROL_VALUE_ACCESSOR: any = {
//  provide: NG_VALUE_ACCESSOR,
//  useExisting: forwardRef(() => TextboxComponent),
//  multi: true
//};


export class ControlValueBase implements ControlValueAccessor {

  //The internal data model
  protected innerValue: any = '';

  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
    return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}

