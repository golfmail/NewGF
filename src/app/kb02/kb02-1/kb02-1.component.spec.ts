import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kb021Component } from './kb02-1.component';

describe('Kb021Component',
  () => {
    let component: Kb021Component;
    let fixture: ComponentFixture<Kb021Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [Kb021Component]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Kb021Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });