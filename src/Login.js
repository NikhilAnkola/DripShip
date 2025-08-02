import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem("rememberedUser") || "",
      password: "",
      showPassword: false,
      rememberMe: !!localStorage.getItem("rememberedUser"),
      loginAttempts: 0,
      isLocked: false,
    };

    this.users = [
      { username: "Admin", password: "1234" },
      { username: "Nikhil", password: "3103" }
    ];
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      rememberMe: !prevState.rememberMe,
    }));
  };

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.isLocked) {
      alert("Too many failed attempts. Try again later.");
      return;
    }

    const { username, password, rememberMe } = this.state;

    const matchedUser = this.users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      if (rememberMe) {
        localStorage.setItem("rememberedUser", username);
      } else {
        localStorage.removeItem("rememberedUser");
      }

      this.setState({ loginAttempts: 0 });
      alert(`Welcome ${username}`);

      if (this.props.onLoginSuccess) {
        this.props.onLoginSuccess(username);
      }
    } else {
      const attempts = this.state.loginAttempts + 1;
      this.setState({ loginAttempts: attempts });

      if (attempts >= 3) {
        this.setState({ isLocked: true });
        alert("Account locked after 3 failed attempts.");
      } else {
        alert(`Incorrect credentials. Attempt ${attempts} of 3.`);
      }
    }
  };

  render() {
    const {
      username,
      password,
      rememberMe,
      showPassword,
      isLocked,
    } = this.state;

    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.handleInputChange}
              disabled={isLocked}
              required
            />
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleInputChange}
              disabled={isLocked}
              required
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={this.handleCheckboxChange}
              id="rememberMe"
              disabled={isLocked}
            />
            <label htmlFor="rememberMe"> Remember Me</label>
          </div>
          <div>
            <button
              type="button"
              onClick={this.toggleShowPassword}
              disabled={isLocked}
            >
              {showPassword ? "Hide" : "Show"} Password
            </button>
          </div>
          <div>
            <button type="submit" disabled={isLocked}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
