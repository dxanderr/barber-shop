import React from "react";

export default function Login() {
    return (
        <div className="login-container">
            <form>
                <h4>Login</h4>
                <p className="header-text">Login to book an appointment</p>
                <p className="form-text">Email</p>
                <input type="text" className="input-field"></input>
                <p className="form-text">Password</p>
                <input type="text" className="input-field"></input>

                <button>Log in</button>
            </form>

            <a href="/register">Sign up</a><br></br>
            <a href="/">Didn't receive confirmation instructions?</a>
        </div>
    );
}
