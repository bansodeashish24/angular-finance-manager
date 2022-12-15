import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BudgetSettingComponent } from './budget-setting/budget-setting.component';
import { BudgetComponent } from './budget/budget.component';
import { CurrentBudgetStateComponent } from './current-budget-state/current-budget-state.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Route[] = [
  {
    path: '',
    component: BudgetComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'current-budget-state',
      },
      {
        path: 'current-budget-state',
        component: CurrentBudgetStateComponent,
      },
      {
        path: 'setting',
        component: BudgetSettingComponent,
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetRoutingModule {}
