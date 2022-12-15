import { Component, Input, OnInit } from '@angular/core';
import { CardInput } from '../models';

@Component({
  selector: 'app-budget-category-card',
  templateUrl: './budget-category-card.component.html',
  styleUrls: ['./budget-category-card.component.scss'],
})
export class BudgetCategoryCardComponent implements OnInit {
  panelOpenState = true;
  isAddModeActive = false;

  @Input() budgetCategory: Partial<CardInput> = {};

  constructor() {}

  ngOnInit(): void {}

  addSubCategory() {
    if (this.isAddModeActive) {
      return;
    }
    this.isAddModeActive = true;
    this.budgetCategory.sub_categories!.push({
      sub_category_name: '',
      sub_category_amount: '',
      is_new_row: true,
    });
  }

  saveNewSubCategory() {
    this.budgetCategory.sub_categories![
      this.budgetCategory.sub_categories!.length - 1
    ].is_new_row = false;
    this.isAddModeActive = false;
    console.log(this.budgetCategory.sub_categories);
  }

  cancelAddSubCategory() {
    this.isAddModeActive = false;
    this.budgetCategory.sub_categories?.pop();
  }
}
