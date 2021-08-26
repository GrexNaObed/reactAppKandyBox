// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import {  } from "react-pring";
import { Route, Switch, Redirect } from "react-router-dom";

import { ProductP, Home, Catalag, MapStreet } from "../../pages/index";


function RoutingAndQuery() {

    const [singleKeks, setsingleKeks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then(resp => resp.json())
            .then(body => setsingleKeks(body.keks))
    }, [])

    return (
        <div>
            <Switch>
                <Route path='/' render={ () => <Home states={ singleKeks } /> } exact />
                <Route path='/catalog' component={ Catalag } exact />
                {
                    singleKeks.map(item => <Route key={ item.id } path={ `/${item.id}` } render={ () => <ProductP  { ...item } /> } exact />)
                }
                <Route path='/mapstreet' component={ MapStreet } exact />
                <Redirect to='/'/>
            </Switch>

        </div>
    )
}

export default RoutingAndQuery
