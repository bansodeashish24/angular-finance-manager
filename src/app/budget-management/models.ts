enum AccountTypes {
  Savings = 'Savings',
  MutualFund = 'Mutual Fund',
}

export interface Account {
  id: string;
  name: string;
  balance: Number;
  account_type: AccountTypes;
  latest_budget_id: string;
  latest_cbs_id: string;
}

export interface Transaction {
  id: string;
  account_id: string;
  transaction_id: string;
  date: string;
  withdrawal_amount: number;
  credit_amount: number;
  is_logged: boolean;
}

export interface Budget {
  id: string;
  account_id: string;
  fixed_monthly_income: FixedMonthlyIncome;
  fixed_monthly_expenses: FixedMonthlyExpenses;
  expense_categories: BudgetCategory[];
}

export interface MonthBudget extends Budget {
  month?: string;
  year?: number;
}

/**
 * This will have the sum of all the
 * expenses in the selected month.
 */
export interface MonthExpenditure {
  id: string;
  account_id: string;
  fixed_monthly_expenses: FixedMonthlyExpenses;
  expense_categories: BudgetCategory[];
}

/**
 * MonthBalance = MonthBudget - MonthExpenditure
 * NOTE: The subtraction is between each MonthBudget.category.sub_category
 * and the corresponding MonthExpenditure.category.sub_category
 */
export interface MonthBalance {
  id: string;
  account_id: string;
  fixed_monthly_expenses: FixedMonthlyExpenses;
  expense_categories: BudgetCategory[];
}

interface FixedMonthlyIncome {
  total_income: number;
  incomes: Income[];
}

export interface Income {
  income_id: string;
  income_name: string;
  income_amount: number;
}

interface FixedMonthlyExpenses {
  total_expenses: number;
  expenses: Expense[];
}

export interface Expense {
  expense_id: string;
  expense_name: string;
  expense_amount: number;
}

export interface BudgetCategory {
  category_id: string;
  category_name: string;
  category_total_amount: number;
  sub_categories: BudgetSubCategory[];
}

export interface BudgetSubCategory {
  sub_category_id: string;
  sub_category_name: string;
  sub_category_amount: string;
}

export interface CardInput {
  name: string;
  total_amount: number;
  sub_categories: CardSubCategory[];
}

export interface CardSubCategory {
  sub_category_name: string;
  sub_category_amount: string;
  is_new_row?: boolean;
}
