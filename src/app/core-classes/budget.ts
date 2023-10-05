enum AccountTypes {
  Savings = 'Savings',
  MutualFund = 'Mutual Fund',
}

export class Account {
  public id: string;
  public name: string;
  public balance: Number;
  public account_type: AccountTypes;
  public latest_budget_id: string;
  public latest_cbs_id: string;

  constructor(
    id: string,
    name: string,
    balance: Number,
    account_type: AccountTypes,
    latest_budget_id: string,
    latest_cbs_id: string
  ) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.account_type = account_type;
    this.latest_budget_id = latest_budget_id;
    this.latest_cbs_id = latest_cbs_id;
  }
}
