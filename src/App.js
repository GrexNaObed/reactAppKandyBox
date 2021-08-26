// eslint-disable-next-line
import React, { useEffect, useState } from 'react'

import { Route } from "react-router-dom";
import ProductP from "./components/pages/ProductP";
import Home from "./components/pages/Home";
import Catalag from "./components/pages/Catalag";
import MapStreet from "./components/pages/MapStreet";




function App() {
  const [singleKeks, setsingleKeks] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/db.json')
          .then(resp => resp.json())
          .then(body => setsingleKeks(body.keks))
  }, [])

  return (
    <div className="App">
      <Route path='/' component={ Home } exact />
      <Route path='/catalog' component={ Catalag } exact />
      {
        singleKeks.map(item => <Route key={item.id} path={`/${item.id}`} render={() => <ProductP  {...item} />} exact />)
      }
      <Route path='/mapstreet' component={ MapStreet } exact />
    </div>
  );
}

export default App;
