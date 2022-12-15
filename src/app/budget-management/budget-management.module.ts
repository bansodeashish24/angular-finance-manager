import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetSettingComponent } from './budget-setting/budget-setting.component';
import { CurrentBudgetStateComponent } from './current-budget-state/current-budget-state.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BudgetCategoryCardComponent } from './budget-category-card/budget-category-card.component';

// material modules
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { BudgetComponent } from './budget/budget.component';
import { HttpClientModule } from '@angular/common/http';
import { BudgetManagementService } from './budget-management.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BudgetSettingComponent,
    CurrentBudgetStateComponent,
    TransactionsComponent,
    BudgetCategoryCardComponent,
    BudgetComponent,
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [BudgetManagementService],
})
export class BudgetManagementModule {}
