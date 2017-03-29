import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodStackComponent } from './food-stack.component';

describe('FoodStackComponent', () => {
  let component: FoodStackComponent;
  let fixture: ComponentFixture<FoodStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
