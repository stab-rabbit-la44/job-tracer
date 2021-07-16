import React, { Component } from 'react';

// our create user component
// our backend works on postman but this component does not currently
// connenct properly
class Create extends Component {
  submit(e) {
    e.preventDefault();
    console.log(e);
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/JSON',
    //   },
    //   body: JSON.stringify({
    //     sender: this.state.user.name,
    //     recipient_id: this.state.rec._id,
    //     points: this.state.points,
    //     messages: this.state.msg,
    //     sender_id: this.state.user._id,
    //     recipient: this.state.rec,
    //   }),
    // }).catch((err) => console.log('Error in get feed: ', err));
  }

  render() {
    return (
      <div className="container">
        <div>
          <form method="POST" action="/api/create">
            <label>Username</label>
            <input type="username" id="usr" name="username"></input>
            <br />
            <label>Password</label>
            <input
              type="password"
              id="psw"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            ></input>
            <br />
            <input type="submit" value="Create account"></input>
          </form>
        </div>

        <div id="message">
          <h3>Password must contain the following:</h3>
          <p id="letter" className="invalid">
            A <b>lowercase</b> letter
          </p>
          <p id="capital" className="invalid">
            A <b>capital (uppercase)</b> letter
          </p>
          <p id="number" className="invalid">
            A <b>number</b>
          </p>
          <p id="length" className="invalid">
            Minimum <b>8 characters</b>
          </p>
        </div>
      </div>
    );
  }
}

export default Create;
