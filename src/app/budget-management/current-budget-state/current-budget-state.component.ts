import { Component, OnInit } from '@angular/core';
import { BudgetManagementService } from '../budget-management.service';
import { MonthBalance, MonthBudget, MonthExpenditure } from '../models';

@Component({
  selector: 'app-current-budget-state',
  templateUrl: './current-budget-state.component.html',
  styleUrls: ['./current-budget-state.component.scss'],
})
export class CurrentBudgetStateComponent implements OnInit {
  selectedMonth: number | null = null;
  selectedYear: string | null = null;
  selectedMonthBudget: MonthBudget | null = null;
  selectedMonthExpenditure: MonthExpenditure | null = null;
  selectedMonthBalance: MonthBalance | null = null;

  constructor(private budgetManagementService: BudgetManagementService) {}

  ngOnInit(): void {
    this.fetchTestMonthBudgetData();
  }

  fetchTestMonthBudgetData() {
    this.budgetManagementService
      .getTestMonthBudgetData(this.selectedMonth, this.selectedYear)
      .subscribe({
        next: (monthBudget: MonthBudget) => {
          this.selectedMonthBudget = monthBudget;
          this.fetchTestMonthExpenditureData();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  fetchTestMonthExpenditureData() {
    this.budgetManagementService
      .getTestMonthExpenditureData(this.selectedMonth, this.selectedYear)
      .subscribe({
        next: (monthExpenditure: MonthExpenditure) => {
          this.selectedMonthExpenditure = monthExpenditure;
          this.calculateSelectedMonthBalance();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  /**
   * Calculates the available MonthBalance using formula:
   * MonthBalance = MonthBudget - MonthExpenditure
   */
  calculateSelectedMonthBalance() {
    this.selectedMonthBalance = this.selectedMonthBudget;
    this.selectedMonthExpenditure;
  }
}
