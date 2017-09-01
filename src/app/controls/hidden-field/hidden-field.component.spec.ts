import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenFieldComponent } from './hidden-field.component';

describe('HiddenFieldComponent', () => {
  let component: HiddenFieldComponent;
  let fixture: ComponentFixture<HiddenFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
