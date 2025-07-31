// Login.js
import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredUsername: '',
      enteredPassword: '',
      errorMessage: ''
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ enteredUsername: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ enteredPassword: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, onLoginSuccess } = this.props;
    const { enteredUsername, enteredPassword } = this.state;

    if (
      enteredUsername === username &&
      enteredPassword === password
    ) {
      alert("Welcome!");
      onLoginSuccess(); // Notify App of successful login
    } else {
      this.setState({ errorMessage: '❌ Invalid username or password' });
    }
  };

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={this.state.enteredUsername}
            onChange={this.handleUsernameChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.enteredPassword}
            onChange={this.handlePasswordChange}
            required
          />
          <button type="submit">Login</button>
          {this.state.errorMessage && (
            <p className="error-message">{this.state.errorMessage}</p>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
