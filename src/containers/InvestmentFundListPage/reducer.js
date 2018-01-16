import {
  LOAD_INVESTMENT_FUNDS,
  LOAD_INVESTMENT_FUNDS_SUCCESS,
  LOAD_INVESTMENT_FUNDS_ERROR,
} from './constants';

const initialState = {
  loading: false,
  investmentFunds: [],
};

function investmentFundListPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_INVESTMENT_FUNDS:
      return { ...state, loading: true };
    case LOAD_INVESTMENT_FUNDS_SUCCESS:
      return { ...state, loading: false, investmentFunds: action.investmentFunds };
    case LOAD_INVESTMENT_FUNDS_ERROR:
      return { ...state, loading: false, investmentFunds: [] };
    default:
      return state;
  }
}

export default investmentFundListPageReducer;
