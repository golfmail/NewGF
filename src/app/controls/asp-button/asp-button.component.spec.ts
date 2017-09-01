import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspButtonComponent } from './asp-button.component';

describe('AspButtonComponent',
  () => {
    let component: AspButtonComponent;
    let fixture: ComponentFixture<AspButtonComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [AspButtonComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AspButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });