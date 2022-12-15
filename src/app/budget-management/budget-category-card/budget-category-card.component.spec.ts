import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCategoryCardComponent } from './budget-category-card.component';

describe('BudgetCategoryCardComponent', () => {
  let component: BudgetCategoryCardComponent;
  let fixture: ComponentFixture<BudgetCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetCategoryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
