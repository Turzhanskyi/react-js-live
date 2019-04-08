import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Content from "./Button";


ReactDOM.render(<Content />, document.getElementById('root'));


serviceWorker.unregister();
