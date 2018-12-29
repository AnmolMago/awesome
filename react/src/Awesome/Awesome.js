import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideBar from '../SideBar'

class Awesome extends Component {
    render() {
        return (
            <Router>
                <div id="Awesome">
                    <SideBar />
                </div>
            </Router>
        );
    }
}

export default Awesome;