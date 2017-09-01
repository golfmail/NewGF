import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kb022Component } from './kb02-2.component';

describe('Kb022Component',
  () => {
    let component: Kb022Component;
    let fixture: ComponentFixture<Kb022Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [Kb022Component]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Kb022Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });