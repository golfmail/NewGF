import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginProfileComponent } from './user-login-profile.component';

describe('UserLoginProfileComponent',
  () => {
    let component: UserLoginProfileComponent;
    let fixture: ComponentFixture<UserLoginProfileComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [UserLoginProfileComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(UserLoginProfileComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });