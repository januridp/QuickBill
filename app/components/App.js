// @flow
import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from "./common/NavBar";
import HomePage from "./home/HomePage";
import Dashboard from "./dashboard/Dashboard";
import PDF from "./pdf/PDF";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/dashboard" component={Dashboard}>
                    </Route>
                    <Route path="/pdf" component={PDF}></Route>
                </div>
            </Router>
        );
    }
}