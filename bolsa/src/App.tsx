import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' component = { Home } exact/>
        <Route path='*' component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
