import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Layout from './components/layout/layout';
import store from './store/store';

function App() {

  return (
      <Provider store={ store }>
          <Layout />
      </Provider>
  );
}

export default App;
