import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <header >
                <Header></Header>
                <div>
                    <LatestNews></LatestNews>
                </div>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;