import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h3 className="font-semibold">Login With</h3>
            <div className="space-y-3 my-4">
                <button className="btn w-full"><FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn w-full"><FaGithub></FaGithub> Login With Google</button>
            </div>

            <h3 className="font-semibold">Find Us On</h3>
            <div className="join join-vertical w-full flex mt-4">
                <button className="btn join-item justify-start bg-white"><FaFacebook />Facebook</button>
                <button className="btn join-item justify-start bg-white"><FaInstagram />Instagram</button>
                <button className="btn join-item justify-start bg-white"><FaTwitter />Twitter</button>
            </div>
        </div>
    );
};

export default SocialLogin;