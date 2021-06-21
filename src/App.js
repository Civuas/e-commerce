import React from 'react';
import { Container } from 'rsuite';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Navigationbar from './components/Navigationbar';
import Checkout from './pages/Checkout';
import { CartProvider } from './libs/CartContext';

function App() {
  return (
    <CartProvider>
      <Container>
        <Navigationbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/category/:id" exact>
            <Category />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
        </Switch>
      </Container>
    </CartProvider>
  );
}

export default App;
