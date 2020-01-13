import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './views/home';
import Veic from './views/veic';
import NotFound from './views/notfound';
import Planets from './views/planets';
import People from './views/people';
import Perfiles from './views/perfiles';

const Layout = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path={"/veic/:id"} component={Veic} />
                <Route exact path={"/veic"} component={Veic} />
                <Route exact path={"/planets"} component={Planets} />
                <Route exact path={"/planets:id"} component={Planets} />
                <Route exact path={"/people"} component={People} />
                <Route exact path={"/perfiles/:id"} component={Perfiles} />
                <Route exact path={"/"} component={Home} />
                <Route component={NotFound} />
            </Switch>

        </BrowserRouter>
    )
}

export default Layout;