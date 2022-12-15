import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, Budget } from './models';

@Injectable()
export class BudgetManagementService {
  constructor(private http: HttpClient) {}

  getAccountsTestData(): Observable<Account[]> {
    return this.http.get<Account[]>('../../assets/test_data/accounts.json');
  }

  getBudgetsTestData(): Observable<Budget[]> {
    return this.http.get<Budget[]>('../../assets/test_data/budgets.json');
  }
}
