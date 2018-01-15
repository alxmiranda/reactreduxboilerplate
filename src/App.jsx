import React from 'react';
import { Provider } from 'react-redux';


import Example from 'components/example/Example';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Example />
  </Provider>
);

export default App;
