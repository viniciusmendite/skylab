import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Products from './pages/Products';
import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}