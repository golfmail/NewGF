import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspLinkButtonComponent } from './asp-link-button.component';

describe('AspLinkButtonComponent',
  () => {
    let component: AspLinkButtonComponent;
    let fixture: ComponentFixture<AspLinkButtonComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [AspLinkButtonComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AspLinkButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });