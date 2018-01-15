import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    console.log('ok')
  }).catch(error => 'error');


ReactDOM.render(React.createElement(App), document.getElementById('app'));
