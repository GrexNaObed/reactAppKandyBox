import React, { useEffect, useState } from 'react'

import { Route } from "react-router-dom";
import Product from "./components/pages/ProductP";
import Home from "./components/pages/Home";
import Catalag from "./components/pages/Catalag";
import MapStreet from "./components/pages/MapStreet";
import Products from './html/Products';




function App() {


  return (
    <div className="App">
      <Route path='/' component={ Home } exact />
      <Route path='/catalog' component={ Catalag } exact />
      <Route path='/buy' component={Product} exact />
      {/* <Route path='/buy2' render={ () => <Products state={keks} /> } exact /> */}
      <Route path='/mapstreet' component={ MapStreet } exact />
    </div>
  );
}

export default App;
