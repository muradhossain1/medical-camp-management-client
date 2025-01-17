import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber";


const MainLayout = () => {
    return (
        <div className="px-20">
            <header>
                <Navber></Navber>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;