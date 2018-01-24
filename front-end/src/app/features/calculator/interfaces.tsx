export interface ICalculator {
  amount: number | string;
  term: number | string;
  fee: number | string;
  repay: number | string;
  repaymentDate: Date | string;
  alert: boolean | string;
}

export interface IStandardAction {
  type: string;
  payload: any;
}
