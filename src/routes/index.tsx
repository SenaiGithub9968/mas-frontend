import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Dashboard} from '../pages/dashboard';
import {Register} from '../pages/register';
import {Login} from '../pages/login';
import {NotFound} from '../pages/NotFound';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/*" component={NotFound}/>
    </Switch>
)

export default Routes;