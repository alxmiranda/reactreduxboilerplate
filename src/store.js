import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import requestUtil from './utils/request';
import logicList from './logic';
import reducers from './reducers';

function configureStore() {
  const injectedHelpers = { requestUtil };
  const logicMiddleware = createLogicMiddleware(logicList, injectedHelpers);

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logicMiddleware)),
  );
  store.logicMiddleware = logicMiddleware;

  return store;
}

export default configureStore();
