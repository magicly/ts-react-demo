import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StoreState } from './types';
import reducer from './reducers';
import Hello from './containers/Counter';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<StoreState>(reducer, { name: 'counter1', count: 0 });
// const store = createStore(reducer, { name: 'counter1', count: 0 });

// ReactDOM.render(<Hello name="counter1" />, document.getElementById('root') as HTMLElement);
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
