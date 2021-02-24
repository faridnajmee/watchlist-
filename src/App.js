import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './Component/Header';
import { Watchlist } from './Component/Watchlist';
import { Watched } from './Component/Watched';
import { Add } from './Component/Add';
import './App.css';
import './lib/font-awesome/css/all.min.css';

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Watchlist />
          </Route>

          <Route exact path='/watched'>
            <Watched />
          </Route>

          <Route exact path='/add'>
            <Add />
          </Route>

          <Route exact path='/facebook'>
            <Watchlist />
          </Route>

        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
