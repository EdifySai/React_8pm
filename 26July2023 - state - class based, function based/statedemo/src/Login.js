import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    stateHandler = (event) => {
        console.log(event.target.value);
        var name = event.target.name; // username, password
        console.log("name", name);
        this.setState({ [name]: event.target.value });
    }
    login = (event) => {
        event.preventDefault();
        console.log("state", this.state);
        // logic to compare
    }
    render() {
        return (
            <div>
                <form>
                    <input onChange={this.stateHandler} type="text" name="username" placeholder="username"></input>
                    <input onChange={this.stateHandler} type="password" name="password" placeholder="password"></input>
                    <button onClick={this.login}>Login</button>
                </form>
            </div>
        )
    }
}
export default Login;
