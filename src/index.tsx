import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from './components/button';
import './index.scss';

const App = () => {
  return (
    <div className="root">
      <h1>Hello World!</h1>
      <Button variant="primary">Hello</Button>
      <div>
        <i className="fa fa-address-book fa-2x"></i>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
