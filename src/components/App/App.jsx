import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage, CartPage, NotFound } from '../pages/index';
import ShopHeader from '../ShopHeader/ShopHeader.jsx'; 

const App = (props) => {
  return (
    <>
      <ShopHeader itemsCount={5} total={122} />
      <main className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </>

  )
}

export default App;