import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
// import Checkout from './containers/Checkout/Checkout';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Cart from './containers/Cart/Cart';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <Switch>
                  <Route path="/checkout"  component={Checkout} />
                  <Route path="/" component={Cart} />
              </Switch>
          </Layout>
      </div>
    );
  }
}

export default App;
