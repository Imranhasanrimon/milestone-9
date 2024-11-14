import { NavLink } from "react-router-dom";
import userImage from "../assets/image copy.png";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center mt-3">
            <div></div>
            <ul className="space-x-3">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/about">About</NavLink>
            </ul>
            <div className="flex items-center gap-3">
                <img className="w-12" src={userImage} alt="" />
                <button className="btn btn-neutral rounded-none">Login</button>
            </div>

        </div>
    );
};

export default Navbar;