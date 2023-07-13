import React from "react";


export default class Navbar extends React.Component {
    render() {
        return (
            <div className ="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark col-md-8 mx-auto" style={{backgroundColor: "#930c0c"}}>
                    <div className="container-fluid">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <a className="navbar-brand" href="index.html">Project XIII</a>
                            <a className="nav-link" href="#">About</a>
                            <a className="nav-link" href="##">Forgot Username/Password?</a>
                        </ul>
                    </div>
                </nav>
            </div> 
        )
    }
}