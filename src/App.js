import React, { Component } from 'react';
import './App.css';

import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Cart from './component/Cart';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render(){
    return (
      <BrowserRouter>
        Om Sai
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={Cart} />

        </Switch>


      </BrowserRouter>
    )
  }
  
}

export default App;
