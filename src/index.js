import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './common/base.css';
import './index.css';
import * as serviceWorker from './config/serviceWorker';
// import Main from './common/main/Main';

// ReactDOM.render(<Main />, document.getElementById('root'));
// import {Router} from './router/router'
import RouterPage from './router/routerPage';

ReactDOM.render(<RouterPage />, document.getElementById('root'));
serviceWorker.unregister();