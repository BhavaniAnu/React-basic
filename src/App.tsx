import React, { Fragment } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  // console.log('hello');
  // const add = (a: number, b: number) => a + b;
  // console.log(add(4, 5));

  return (
    <Fragment>
      <Home />
      {/* <Login /> */}
    </Fragment>
  );
}

export default App;
