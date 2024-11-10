import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Login = () => {
    const emailRef = useRef();
    const handleLogin = e => {

        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (result.user.emailVerified) {
                    console.log(result.user);
                } else {
                    console.log("not verified");
                }
            })
            .catch(err => {
                console.log("Error: ", err.message);
            })
    }
    const handleForgot = () => {
        console.log('clicked', emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            console.log("plz provide a valid email");
        } else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('pass reset email sent please check')
                })
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label inline">
                                <button onClick={handleForgot} className="label-text-alt link link-hover inline">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Do not have an account? <Link to="/signup" className="text-lg underline">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;