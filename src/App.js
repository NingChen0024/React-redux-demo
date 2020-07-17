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

function App() {
  return (
    <Provider store = {store}>
      <div>
        <Head/>
        <NewCakeContainer/>
        <CakeContainer/>
        {/* <ItemContainer cake/>
        <ItemContainer/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
