import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import Head from './components/Head'
import {Provider} from 'react-redux'
import store from './redux/store'
import HookCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Provider store = {store}>
      <div>
        <Head/>
        <Switch>
          <Route exact path="/">
            <NewCakeContainer/>
          </Route>

          <Route exact path="/cake">
            <CakeContainer/>
          </Route>
          {/* <ItemContainer cake/>
          <ItemContainer/> */}
          <Route exact path="/user">
            <UserContainer/>
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
