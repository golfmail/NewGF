import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyleComponent } from './footer-style.component';

describe('FooterStyleComponent',
  () => {
    let component: FooterStyleComponent;
    let fixture: ComponentFixture<FooterStyleComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [FooterStyleComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(FooterStyleComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });