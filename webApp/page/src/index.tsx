import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Hello from './components/Hello';
import Cal from './components/Cal';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />,
    <Hello name="lee" level={10} />
    <Cal x={5} y ={1024} />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
