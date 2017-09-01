import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredFieldValidatorComponent } from './required-field-validator.component';

describe('RequiredFieldValidatorComponent',
  () => {
    let component: RequiredFieldValidatorComponent;
    let fixture: ComponentFixture<RequiredFieldValidatorComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [RequiredFieldValidatorComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(RequiredFieldValidatorComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });