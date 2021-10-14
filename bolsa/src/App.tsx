import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { rainData } from "./utils/interpolationData";
import Pluvio from "./utils/tabela";
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
