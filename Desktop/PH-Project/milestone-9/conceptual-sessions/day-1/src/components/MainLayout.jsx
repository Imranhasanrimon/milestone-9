import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div style={{ background: 'pink', padding: '20px', display: 'flex', gap: '30px' }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
