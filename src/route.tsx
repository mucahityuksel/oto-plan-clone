import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Car from './Pages/Car';
import CarDetailPage from './Pages/CarDetail';
import Garage from './Pages/Garage';
import Home from './Pages/Home';

function RouteComponent() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/car-details/:id" component={Car}></Route>
                <Route path="/cars" component={CarDetailPage}></Route>
                <Route path="/garage" component={Garage}></Route>
            </Switch>
        </Router>
    )
}

export default RouteComponent
