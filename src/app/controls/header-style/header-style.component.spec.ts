import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyleComponent } from './header-style.component';

describe('HeaderStyleComponent',
  () => {
    let component: HeaderStyleComponent;
    let fixture: ComponentFixture<HeaderStyleComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [HeaderStyleComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(HeaderStyleComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });