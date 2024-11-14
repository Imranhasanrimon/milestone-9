import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";

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
            <main className="grid md:grid-cols-12 gap-5 mt-10">
                <aside className="col-span-3"><LeftNavbar></LeftNavbar></aside>
                <section className="col-span-6"><Outlet></Outlet></section>
                <aside className="col-span-3"><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default HomeLayout;