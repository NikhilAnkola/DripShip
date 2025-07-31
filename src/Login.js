import React from 'react';
import Login from './Login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredUsername: '',
      enteredPassword: '',
      message: ''
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

    const { username, password } = this.props;
    const { enteredUsername, enteredPassword } = this.state;

    if (enteredUsername === username && enteredPassword === password) {
      this.setState({ message: 'Login successful!' });
    } else {
      this.setState({ message: 'Invalid credentials. Try again.' });
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Login Page</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={this.state.enteredUsername}
              onChange={this.handleUsernameChange}
              required
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <input
              type="password"
              placeholder="Password"
              value={this.state.enteredPassword}
              onChange={this.handlePasswordChange}
              required
            />
          </div>
          <div style={{ marginTop: '15px' }}>
            <button type="submit">Login</button>
          </div>
        </form>
        <p style={{ marginTop: '20px', color: 'green' }}>{this.state.message}</p>
      </div>
    );
  }
}

export default Login;
