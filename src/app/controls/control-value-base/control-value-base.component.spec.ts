import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValueBaseComponent } from './control-value-base.component';

describe('ControlValueBaseComponent', () => {
  let component: ControlValueBaseComponent;
  let fixture: ComponentFixture<ControlValueBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlValueBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlValueBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
