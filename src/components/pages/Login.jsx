import {useState } from "react";
import {useNavigate} from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
import Navbar from "../Navbar";

export default function Login() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleLogin = (event) =>{
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/")
            })
            .catch((error) => {
                setError(true)
            });   
    }

    return (
        <div className="login-container">
            <Navbar theme="dark" />
            <form onSubmit={handleLogin}>
                <h4>Login</h4>
                <p className="header-text">Login to book an appointment</p>
                <p className="form-text">Email</p>
                <input type="email" className="input-field" onChange={e=>setEmail(e.target.value)}></input>
                <p className="form-text">Password</p>
                <input type="password" className="input-field" onChange={e => setPassword(e.target.value)}></input>
                <button type="submit">Log in</button>
                {error && <span>Wrong email or password</span>}
            </form>

            <a href="/register">Sign up</a><br></br>
            <a href="/">Didn't receive confirmation instructions?</a>
        </div>
    );
}
