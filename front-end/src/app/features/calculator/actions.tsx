import * as types from './types';
import axios from 'axios';
import { IStandardAction } from './interfaces';

export function getData(): any {
  return (dispatch) => {
    axios.get('http://localhost:8080/example-data')
    .then((response) => {
      dispatch(setDataSuccess(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export function calculate(values): any {
  return (dispatch) => {
    axios.post('http://localhost:8080/example-data', values)
    .then((response) => {
      if (values.amount < 200 ||  values.term < 7) {
        dispatch(showAlert('Minimum amount is Q200 and minimum term is 7 days.'));
      } else {
        dispatch(showAlert(false));
      }
      dispatch(setDataSuccess(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export function setDataSuccess(data): IStandardAction {
  return {
    type: types.SET_DATA,
    payload: data,
  };
}
export function showAlert(type): IStandardAction {
  return {
    type: types.SHOW_ALERT,
    payload: {
      show: type,
    },
  };
}
