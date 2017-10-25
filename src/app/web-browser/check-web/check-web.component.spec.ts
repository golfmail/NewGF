import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWebComponent } from './check-web.component';

describe('CheckWebComponent', () => {
  let component: CheckWebComponent;
  let fixture: ComponentFixture<CheckWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
