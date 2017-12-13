import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuReportZzpmtComponent } from './menu-report-zzpmt.component';

describe('MenuReportZzpmtComponent', () => {
  let component: MenuReportZzpmtComponent;
  let fixture: ComponentFixture<MenuReportZzpmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuReportZzpmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuReportZzpmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
