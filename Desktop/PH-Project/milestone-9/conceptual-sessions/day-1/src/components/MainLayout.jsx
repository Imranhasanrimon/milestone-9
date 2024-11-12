import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h1>Main Layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;