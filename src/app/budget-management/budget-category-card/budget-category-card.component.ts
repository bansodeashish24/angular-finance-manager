import { Component, Input, OnInit } from '@angular/core';
import { CardInput } from '../models';

@Component({
  selector: 'app-budget-category-card',
  templateUrl: './budget-category-card.component.html',
  styleUrls: ['./budget-category-card.component.scss'],
})
export class BudgetCategoryCardComponent implements OnInit {
  panelOpenState = true;

  @Input() budgetCategory: Partial<CardInput> = {};

  constructor() {}

  ngOnInit(): void {}
}
