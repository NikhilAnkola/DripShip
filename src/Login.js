import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredUsername: "",
      enteredPassword: "",
      error: "",
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ enteredUsername: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ enteredPassword: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, onLoginSuccess } = this.props;
    const { enteredUsername, enteredPassword } = this.state;

    if (
      enteredUsername === username &&
      enteredPassword === password
    ) {
      onLoginSuccess();
    } else {
      this.setState({ error: "Invalid credentials. Try again." });
    }
  };

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
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
        </form>
        {this.state.error && (
          <p className="error">{this.state.error}</p>
        )}
      </div>
    );
  }
}

export default Login;
