import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import './index.scss';

const renderApp = (AppComponent: typeof App) => {
  ReactDOM.render(<AppComponent />, document.getElementById('root'));
};

renderApp(App);

if ((module as any).hot) {
  (module as any).hot.accept('./app', () => {
    const NextApp = require('./app').App;
    renderApp(NextApp);
  });
}
