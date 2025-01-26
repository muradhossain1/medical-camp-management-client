import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber";
import Footer from "../Pages/Shared/Footer";


const MainLayout = () => {
    return (
        <div >
            <header>
                <Navber></Navber>
            </header>
            <main className="px-4 min-h-screen md:px-12 lg:px-20 mt-[4.3rem]">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;