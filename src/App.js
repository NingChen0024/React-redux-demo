import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import Head from './components/Head'
import {Provider} from 'react-redux'
import store from './redux/store'
import HookCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer';
function App() {
  return (
    <Provider store = {store}>
      <div>
        <Head/>
        <HookCakeContainer/>
        <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
