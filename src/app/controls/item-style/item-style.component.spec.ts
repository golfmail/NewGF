import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStyleComponent } from './item-style.component';

describe('ItemStyleComponent',
  () => {
    let component: ItemStyleComponent;
    let fixture: ComponentFixture<ItemStyleComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [ItemStyleComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ItemStyleComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });