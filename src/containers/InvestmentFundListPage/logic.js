import { createLogic } from 'redux-logic';
import API_ENDPOINT from '../../constants';
import { loadInvestmentFundsError, loadInvestmentFundsSuccess } from './actions';
import { LOAD_INVESTMENT_FUNDS } from './constants';

// For TESTING purposes, chrome may help to bypass CORS
// https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?utm_source=chrome-app-launcher-info-dialog
const loadInvestmentFundsLogic = createLogic({
  type: LOAD_INVESTMENT_FUNDS,
  latest: true,

  process({ requestUtil }, dispatch, done) {
    const requestURL = `${API_ENDPOINT}/investment-funds/summary`;
    requestUtil(requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then((success) => {
      dispatch(loadInvestmentFundsSuccess(success.investmentFunds));
    }).then(done)
      .catch((error) => {
        dispatch(loadInvestmentFundsError(error));
        done();
      });
  },
});

export default loadInvestmentFundsLogic;
