import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowStyleComponent } from './row-style.component';

describe('RowStyleComponent', () => {
  let component: RowStyleComponent;
  let fixture: ComponentFixture<RowStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
