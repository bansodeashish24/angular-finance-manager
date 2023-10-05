import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, Budget, MonthExpenditure } from './models';

@Injectable()
export class BudgetManagementService {
  constructor(private http: HttpClient) {}

  getAccountsTestData(): Observable<Account[]> {
    return this.http.get<Account[]>('../../assets/test_data/accounts.json');
  }

  getTestMonthBudgetData(
    year: number | null,
    month: string | null
  ): Observable<Budget> {
    return this.http.get<Budget>('../../assets/test_data/budget.json');
  }

  getTestMonthExpenditureData(
    year: number | null,
    month: string | null
  ): Observable<MonthExpenditure> {
    return this.http.get<MonthExpenditure>(
      '../../assets/test_data/expenditure.json'
    );
  }
}
