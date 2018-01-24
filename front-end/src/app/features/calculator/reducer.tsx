import * as types from './types';
import { ICalculator } from './interfaces';

const initialState: ICalculator = {
  amount: '',
  term: '',
  fee: '',
  repay: '',
  repaymentDate: '',
  alert: false,
};

export function calculatorReducer(state = initialState, action?: any) {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        amount: action.payload.amount,
        term: action.payload.term,
        fee: action.payload.fee,
        repay: action.payload.repay,
        repaymentDate: action.payload.repaymentDate,
      };
    case types.SHOW_ALERT:
      return {
        ...state,
        alert: action.payload.show,
      };
    default:
      return state;
  }
}
