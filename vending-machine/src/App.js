import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
