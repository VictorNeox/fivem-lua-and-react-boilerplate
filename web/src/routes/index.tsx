import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";


import Template from "../pages/Template";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Template>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Template>
        </BrowserRouter>
    );
}


export default Routes;