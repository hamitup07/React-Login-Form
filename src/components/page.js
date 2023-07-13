import React from "react";
import Login from "./loginform";
import Navbar from "./navbar";

export default class Page extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Login />
            </div>
        );
    }
}