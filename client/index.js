import React from 'react';
import ReactDom from 'react-dom';

import App from '../src/App';

// 注入
ReactDom.hydrate(App, document.getElementById('root'))
