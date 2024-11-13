import logo from "../assets/image.png"
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <img className="w-[380px]" src={logo} alt="" />
            <h4 className="text-gray-500 font-semibold">Journalism Without Fear or Favour</h4>
        </div>
    );
};

export default Header;