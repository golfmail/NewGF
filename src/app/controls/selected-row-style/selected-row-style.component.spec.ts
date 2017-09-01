import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRowStyleComponent } from './selected-row-style.component';

describe('SelectedRowStyleComponent',
  () => {
    let component: SelectedRowStyleComponent;
    let fixture: ComponentFixture<SelectedRowStyleComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [SelectedRowStyleComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(SelectedRowStyleComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });