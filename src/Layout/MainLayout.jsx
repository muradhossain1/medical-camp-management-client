import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber";


const MainLayout = () => {
    return (
        <div >
            <header>
                <Navber></Navber>
            </header>
            <main className="px-4 md:px-12 lg:px-20 mt-[4.3rem]">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;