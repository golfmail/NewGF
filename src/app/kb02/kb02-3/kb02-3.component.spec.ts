import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kb023Component } from './kb02-3.component';

describe('Kb023Component',
  () => {
    let component: Kb023Component;
    let fixture: ComponentFixture<Kb023Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [Kb023Component]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Kb023Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });