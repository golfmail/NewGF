import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSaveComponent } from './dialog-save.component';

describe('DialogSaveComponent', () => {
  let component: DialogSaveComponent;
  let fixture: ComponentFixture<DialogSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
