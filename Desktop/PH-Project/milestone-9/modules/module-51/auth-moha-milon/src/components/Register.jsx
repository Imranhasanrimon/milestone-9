import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.init";
const Register = () => {
    const { createUser } = useContext(AuthContext);
    const goHome = useNavigate();
    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                goHome("/")
            })
            .catch(err => {
                console.log(err);
            })
    }

    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(user => console.log(user))
            .catch(err => console.log(err))
    }

    const githubProvider = new GithubAuthProvider()
    const handleGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(user => console.log(user))
            .catch(err => console.log(err))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogle} type="button" className="btn btn-success">Sign Up with Google</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGithub} type="button" className="btn btn-success">Sign Up with Github</button>
                        </div>
                        <p>Already have account? <Link to="/login" className="text-lg font-semibold underline">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;