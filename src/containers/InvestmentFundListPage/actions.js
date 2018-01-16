import {
  LOAD_INVESTMENT_FUNDS,
  LOAD_INVESTMENT_FUNDS_SUCCESS,
  LOAD_INVESTMENT_FUNDS_ERROR,
} from './constants';

export const loadInvestmentFunds = () => ({
  type: LOAD_INVESTMENT_FUNDS,
});

export const loadInvestmentFundsSuccess = investmentFunds => ({
  type: LOAD_INVESTMENT_FUNDS_SUCCESS,
  investmentFunds,
});

export const loadInvestmentFundsError = error => ({
  type: LOAD_INVESTMENT_FUNDS_ERROR,
  error,
});
