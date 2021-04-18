import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Doc from './component/dox/doc'
import Pdf from './component/pdf/pdf'
import Sheet from './component/spred-sheet/sheet'
import Home from './component/Home/home'
import history from './history'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/doc" component={Doc} />
                    <Route path="/pdf" component={Pdf} />
                    <Route path="/sheet" component={Sheet} />
                </Switch>
            </Router>
        )
    }
}

