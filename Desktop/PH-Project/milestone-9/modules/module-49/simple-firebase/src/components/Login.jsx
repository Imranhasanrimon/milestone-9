import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
            })
            .catch(err => {
                console.log(err)
            })

    }
    const handleGithubSignIn = () => {
        const gitHubProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                console.log(result);
                setUser(result.user)
            })
            .catch(err => console.log(err))
    }

    const handlelogOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out is done');
                setUser(null)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                user ?

                    <button onClick={handlelogOut}>Log Out</button> :
                    <>
                        <button onClick={handleGoogleSignIn}>login with google</button>
                        <button onClick={handleGithubSignIn}>login with Github</button>
                    </>
            }
            {
                user ? <div>
                    <h2>{user.displayName}</h2>
                    <h2>{user.email}</h2>
                    <img src={user.photoURL} alt="" />
                </div> : ""
            }
        </div>
    );
};

export default Login;