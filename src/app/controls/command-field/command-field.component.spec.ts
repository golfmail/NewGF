import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandFieldComponent } from './command-field.component';

describe('CommandFieldComponent',
  () => {
    let component: CommandFieldComponent;
    let fixture: ComponentFixture<CommandFieldComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [CommandFieldComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CommandFieldComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });