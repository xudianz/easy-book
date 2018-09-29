import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style';
import './statics/iconfont/iconfont'


// PWA progressive web application
// https协议的服务器上
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
