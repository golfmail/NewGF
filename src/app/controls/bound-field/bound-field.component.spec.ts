import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundFieldComponent } from './bound-field.component';

describe('BoundFieldComponent',
  () => {
    let component: BoundFieldComponent;
    let fixture: ComponentFixture<BoundFieldComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [BoundFieldComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(BoundFieldComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });