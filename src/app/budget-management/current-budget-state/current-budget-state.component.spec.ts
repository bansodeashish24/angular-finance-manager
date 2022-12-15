import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBudgetStateComponent } from './current-budget-state.component';

describe('CurrentBudgetStateComponent', () => {
  let component: CurrentBudgetStateComponent;
  let fixture: ComponentFixture<CurrentBudgetStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentBudgetStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentBudgetStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
