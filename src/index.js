import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './common/main/Home';
// import Main from './common/main/Main';
import * as serviceWorker from './config//serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
serviceWorker.unregister();