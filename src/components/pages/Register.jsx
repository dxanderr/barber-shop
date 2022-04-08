import React from "react";
import Navbar from "../Navbar";

export default function Register() {
    return (
        <div className="register-container">
            <Navbar theme="dark"/>
            <form>
                <h4>Register</h4>
                <p className="header-text">Sign up to book appointments</p>
                <p className="form-text">Full Name</p>
                <input type="text" className="input-field"></input>
                <p className="form-text">Email</p>
                <input type="text" className="input-field"></input>
                <p className="form-text">Mobile Phone Number</p>
                <input type="text" className="input-field"></input>
                <p className="form-text">Password (6 character minimum)</p>
                <input type="text" className="input-field"></input>
                <p className="form-text">Password Confirmation</p>
                <input type="text" className="input-field"></input>
                <button>Sign up</button>
            </form>

            <a href="/">Log in</a><br></br>
            <a href="/">Didn't receive confirmation instructions?</a>
        </div>
    );
}
