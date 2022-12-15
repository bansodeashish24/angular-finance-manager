import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetManagementModule } from './budget-management/budget-management.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'budget',
  },
  {
    path: 'budget',
    loadChildren: () =>
      import('./budget-management/budget-management.module').then(
        (m) => m.BudgetManagementModule
      ),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
