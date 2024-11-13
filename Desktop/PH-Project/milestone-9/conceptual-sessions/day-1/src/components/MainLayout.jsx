import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div style={{ background: 'pink', padding: '20px', display: 'flex', gap: '30px' }}>
                <NavLink to="/">Home</NavLink>
                <h1>About</h1>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;