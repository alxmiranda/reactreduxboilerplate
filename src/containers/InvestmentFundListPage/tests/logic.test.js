import { createMockStore } from 'redux-logic-test';
import API_ENDPOINT from '../../../constants';
import ApiError from '../../../utils/apiError';
import loadInvestmentFundsLogic from '../logic';
import { loadInvestmentFunds, loadInvestmentFundsError, loadInvestmentFundsSuccess } from '../actions';

const loadInvestmentFundsAction = loadInvestmentFunds();

const investmentFunds = [{ code: '23', name: 'Fundo 1' }];

describe('loadInvestmentFundsAction call succeeds', () => {
  const mockRequestUtil = jest.fn().mockImplementation(() => new Promise(() => ({ investmentFunds })));
  const store = createMockStore({
    initialState: {},
    logic: [loadInvestmentFundsLogic],
    injectedDeps: {
      requestUtil: mockRequestUtil,
    },
  });

  it('Should call the API with correct params', () => {
    store.dispatch(loadInvestmentFundsAction);
    store.whenComplete(() => {
      expect(mockRequestUtil.mock.calls).toHaveLength(1);
      expect(mockRequestUtil.mock.calls[0][0]).toBe(`${API_ENDPOINT}/investment-funds/summary`);
      expect(mockRequestUtil.mock.calls[0][1].method).toBe('GET');
      expect(mockRequestUtil.mock.calls[0][1].headers['Content-Type']).toBe('application/json');
    });
  });

  it('Should dispatch loadInvestmentFundsSuccess on success', () => {
    store.resetActions();
    const successAction = loadInvestmentFundsSuccess(investmentFunds);
    store.dispatch(loadInvestmentFundsAction);
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        loadInvestmentFundsAction,
        successAction,
      ]);
    });
  });
});

describe('loadInvestmentFundsAction call fails', () => {
  const error = new ApiError(500, 'Invalid credentials');
  const errorMockRequestUtil = jest.fn().mockImplementation(() => Promise.reject(error));

  const store = createMockStore({
    initialState: {},
    logic: [loadInvestmentFundsLogic],
    injectedDeps: {
      requestUtil: errorMockRequestUtil,
    },
  });

  it('Should dispatch loadInvestmentFundsError on error', () => {
    store.resetActions();
    const errorAction = loadInvestmentFundsError(error);
    store.dispatch(loadInvestmentFundsAction);
    store.whenComplete(() => {
      expect(store.actions).toEqual([
        loadInvestmentFundsAction,
        errorAction,
      ]);
    });
  });
});
