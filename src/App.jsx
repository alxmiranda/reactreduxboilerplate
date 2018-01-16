import React from 'react';
import { Provider } from 'react-redux';

import InvestmentFundListPage from './containers/InvestmentFundListPage';
import store from './store';

const App = () => (
  <Provider store={store}>
    <InvestmentFundListPage />
  </Provider>
);

export default App;
