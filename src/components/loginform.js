import React from "react";


export default class Login extends React.Component {
    render() {
        return (
            <form>
                <div class="container-fluid col-md-8 mx-auto my-4 py-4 border border-dark">
                    <h3>Log In</h3>
                    <div class ="mb-3">
                        <label for="exampleInputusername1" class="form-label" />Username
                        <input type="username" class="form-control" id="exampleInputusername1"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <br></br>
                            <button id="add" class="btn btn-success form-control m-1 ">Submit</button>
                </div>
            </form>
        )
    }
}