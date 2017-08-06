import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import './app.css';
import './fonts/stylesheet.css';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
