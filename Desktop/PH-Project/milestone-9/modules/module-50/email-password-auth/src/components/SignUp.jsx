import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState(false);
    const [showPass, setShowPass] = useState(false)
    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        setErrorMessage("");
        setSuccessMessage(false)
        if (password.length < 6) {
            setErrorMessage('Password should be at least 6 characters ');
            return;
        }
        if (!terms) {
            setErrorMessage('accept terms');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setSuccessMessage(true)
                console.log(result.user);

                //Email verification
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("Verification email send");
                    })
            })
            .catch(err => {
                setErrorMessage(err.message)
                setSuccessMessage(false)
            })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl pl-5  font-bold">Sign Up now!</h1>
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPass ? "password" : "text"} name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <button onClick={() => setShowPass(!showPass)} className="btn btn-sm absolute right-3 top-11">
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <div className="form-control ">
                    <label className="label cursor-pointer justify-start">
                        <input type="checkbox" name="terms" className="checkbox mr-2" />
                        <span className="label-text">Accept terms & conditions</span>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                {
                    errorMessage && <h3 className="text-red-500">{errorMessage}</h3>
                }
                {
                    successMessage && <h3 className="text-green-500">sign up successfull</h3>
                }
                <p> have an account? <Link to="/login" className="text-lg underline">Log In</Link></p>
            </form>
        </div>
    );
};

export default SignUp;