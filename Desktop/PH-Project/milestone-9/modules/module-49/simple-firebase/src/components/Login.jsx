import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";

const Login = () => {
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>login with google</button>
        </div>
    );
};

export default Login;