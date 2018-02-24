import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Counter';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ReactDOM.render(<Hello name="counter1" />, document.getElementById('root') as HTMLElement);
ReactDOM.render(<Hello name="counter1" />, document.getElementById('root'));
registerServiceWorker();
