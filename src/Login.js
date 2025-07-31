// Login.js
import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUsername: '',
      inputPassword: '',
      error: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputUsername, inputPassword } = this.state;
    const { username, password, onLoginSuccess } = this.props;

    if (inputUsername === username && inputPassword === password) {
      onLoginSuccess();
    } else {
      this.setState({ error: 'Invalid username or password' });
    }
  };

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="inputUsername"
            placeholder="Username"
            value={this.state.inputUsername}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="inputPassword"
            placeholder="Password"
            value={this.state.inputPassword}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}
      </div>
    );
  }
}

export default Login;
