import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReportComponent } from './report-report.component';

describe('ReportReportComponent', () => {
  let component: ReportReportComponent;
  let fixture: ComponentFixture<ReportReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
