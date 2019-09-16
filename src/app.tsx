import * as React from 'react';
import { Button } from './components/button';

export const App = () => {
  return (
    <div className="root">
      <h1>Hello World!</h1>
      <Button variant="danger">Hello</Button>
      <div>
        <i className="fa fa-address-book fa-2x"></i>
      </div>
    </div>
  );
};
