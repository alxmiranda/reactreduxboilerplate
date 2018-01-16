import { combineReducers } from 'redux';

import exampleReducer from './exampleReducer';
import investmentFundListPageReducer from '../containers/InvestmentFundListPage/reducer';

const reducers = combineReducers({
  exampleReducer,
  investmentFundListPageReducer,
});

export default reducers;
