import React from "react";
import "./SignupLogin.css";

function SignupLogin() {
	return (
		<div className="SignupLogin">
			<main>
				<section className="SignupLogin__section">
					<header>
						<h3>Log In</h3>
					</header>
					<form className="login-form">
						<div className="field">
							<label htmlFor="user-name">User name</label>
							<input placeholder="User Name" type="text" name="user-name" id="user-name" />
						</div>
						<div className="field">
							<label htmlFor="login-password">Password</label>
							<input type="password" name="login-password" id="login-password" />
						</div>
						<button type="submit">Login</button>
					</form>
				</section>

				<section className="SignupLogin__section">
					<header>
						<h3>Sign up</h3>
					</header>
					<form className="signup-form">
						<div className="field">
							<label htmlFor="first-name">First name</label>
							<input placeholder="First Name" type="text" name="first-name" id="first-name" />
						</div>
						<div className="field">
							<label htmlFor="last-name">Last name</label>
							<input type="text" name="last-name" id="last-name" placeholder="Last Name" />
						</div>
						<div className="field">
							<label htmlFor="username">Email</label>
							<input type="text" name="username" id="username" />
						</div>
						<div className="field">
							<label htmlFor="signup-password">Password</label>
							<input type="password" name="signup-password" id="signup-password" />
						</div>
						<button type="submit">Create Account</button>
					</form>
				</section>
			</main>
		</div>
	);
}

export default SignupLogin;
