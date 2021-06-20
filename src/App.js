import React from 'react';
import { Container } from 'rsuite';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/category:id">
          <Category />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
