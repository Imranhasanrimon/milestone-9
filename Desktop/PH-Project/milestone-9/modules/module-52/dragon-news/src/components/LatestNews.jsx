import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 mt-2">
            <p className="bg-red-400 text-base-100 py-1 px-3">Latest</p>
            <Marquee className="bg-gray-200 py-1 space-x-10 "
                pauseOnHover={true}>
                <Link to="/"> I can be a React component</Link>
                <Link to="/news"> Lorem ipsum dolor sit amet consectetur adipisicing .</Link>
                <Link to="/about"> sit amet consectetur adipisicing</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;