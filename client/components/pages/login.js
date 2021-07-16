import React, { Component } from 'react';

// our login page, this needs some work, as it does not currently connect
// with our backend
class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="App-header"></header>
        <center>
          <div className="header-login">
            <h1>Login</h1>
            <hr />
            <br />
            <div className="login">
              <form method="GET" action="/api/login">
                <label> Username </label>
                <input type="text"></input> {/* must add get request*/}
                <br />
                <span>
                  <label> Password </label>
                  <input type="text"></input>
                </span>
              </form>
              <br />
              <div>
                <button name="submit">Submit</button>
              </div>
              <br />
              <span>
                <a href="/forgot">Forgot account?</a>
                <br />
                <a href="/create">Create account</a>
              </span>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Login;
