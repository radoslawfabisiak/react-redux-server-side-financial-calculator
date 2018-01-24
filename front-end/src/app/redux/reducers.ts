import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { IStore } from './IStore';
import { calculatorReducer } from '../features/calculator/reducer';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  calculator: calculatorReducer,
  routing: routerReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
