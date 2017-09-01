import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kb02Component } from './kb02.component';

describe('Kb02Component',
  () => {
    let component: Kb02Component;
    let fixture: ComponentFixture<Kb02Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [Kb02Component]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Kb02Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });