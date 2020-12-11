import React from 'react'
import {Container} from 'reactstrap'
import Dashboard from '../root/Dashboard'
import Navi from '../navi/Navi'
import { Switch } from 'react-router-dom';
import {Route} from 'react-router-dom'
import CartDetail from '../cart/CartDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} /> 
        <Route path="/product" exact component={Dashboard} /> 
        <Route path="/saveproduct/:productId" exact component={AddOrUpdateProduct} /> 
        <Route path="/cart" exact component={CartDetail} /> 
      </Switch>
      
    </Container>
  );
}

export default App;
