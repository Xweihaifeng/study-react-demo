import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './common/main/Main';
import * as serviceWorker from './config//serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();