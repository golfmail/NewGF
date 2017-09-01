import { Component, Input, OnInit, forwardRef  } from '@angular/core';
import { ControlValueBase } from 'app/controls/control-value-base/control-value-base.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


export const TEXT_BOX_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextboxComponent),
  multi: true
};

@Component({
  selector: 'TextBox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
  providers: [TEXT_BOX_CONTROL_VALUE_ACCESSOR]
})
export class TextboxComponent extends ControlValueBase  {
  @Input('TextMode')
  textMode: string;

  @Input('Height')
  height: string;

  @Input('Width')
  width: string;

  @Input('ID')
  name: string;
    

  constructor() {
    super();
    this.textMode = "SingleLine";
    
  }
   
}
//http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel

//http://blog.rangle.io/angular-2-ngmodel-and-custom-form-components/
