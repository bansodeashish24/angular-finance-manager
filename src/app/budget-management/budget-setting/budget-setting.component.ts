import { Component, OnInit } from '@angular/core';
import { BudgetManagementService } from '../budget-management.service';
import { map } from 'rxjs';
import { Budget, BudgetCategory, CardInput, Expense, Income } from '../models';

interface AccountValue {
  title: string;
  value: string;
}

@Component({
  selector: 'app-budget-setting',
  templateUrl: './budget-setting.component.html',
  styleUrls: ['./budget-setting.component.scss'],
})
export class BudgetSettingComponent implements OnInit {
  selectedAccount = '';
  allAccounts: AccountValue[] = [];
  selectedMonthBudget: any;
  fixedIncome: Partial<CardInput> = {};
  fixedExpenses: Partial<CardInput> = {};
  budgetCategories: Partial<CardInput>[] = [{}];
  firstBudgetSwimlaneEndIndex = 0;
  selectedMonth: number | null = null;
  selectedYear: string | null = null;
  constructor(private budgetService: BudgetManagementService) {}

  ngOnInit(): void {
    this.fetchAccounts();
  }

  fetchAccounts() {
    this.budgetService.getAccountsTestData().subscribe({
      next: (response) => {
        const allAccounts = response;
        this.allAccounts = allAccounts.map((account) => ({
          title: account.name,
          value: account.name.split(' ').join('-'),
        }));
        this.selectedAccount = this.allAccounts[0].value;
        this.fetchSelectedMonthBudgetForAccount();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  fetchSelectedMonthBudgetForAccount() {
    this.budgetService
      .getTestMonthBudgetData(this.selectedMonth, this.selectedYear)
      .pipe(
        map((budget: Budget): Budget => {
          return budget;
        })
      )
      .subscribe({
        next: (budget: Budget) => {
          this.selectedMonthBudget = budget;
          this.initializeCards();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  initializeCards() {
    this.fixedIncome = {
      name: 'Income Per Month',
      total_amount: this.selectedMonthBudget.fixed_monthly_income.total_income,
      sub_categories: this.selectedMonthBudget.fixed_monthly_income.incomes.map(
        (income: Partial<Income>) => ({
          sub_category_name: income.income_name,
          sub_category_amount: income.income_amount,
        })
      ),
    };

    this.fixedExpenses = {
      name: 'Fixed Monthly Deduction',
      total_amount:
        this.selectedMonthBudget.fixed_monthly_expenses.total_expenses,
      sub_categories:
        this.selectedMonthBudget.fixed_monthly_expenses.expenses.map(
          (expense: Partial<Expense>) => ({
            sub_category_name: expense.expense_name,
            sub_category_amount: expense.expense_amount,
          })
        ),
    };

    this.budgetCategories = this.selectedMonthBudget.expense_categories.map(
      (category: BudgetCategory) => {
        const budgetCategoryForCard: CardInput = {
          name: category.category_name,
          total_amount: category.category_total_amount,
          sub_categories: category.sub_categories.map((subCategory) => ({
            sub_category_name: subCategory.sub_category_name,
            sub_category_amount: subCategory.sub_category_amount,
          })),
        };
        return budgetCategoryForCard;
      }
    );

    this.firstBudgetSwimlaneEndIndex = Math.ceil(
      this.budgetCategories.length / 2
    );
  }
}
