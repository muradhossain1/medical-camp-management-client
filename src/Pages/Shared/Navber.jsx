
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import logo from '../../../public/logo.png'


const Navber = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Logout successfully!!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error => { console.log(error) })
    }

    const navlinks = <>
        <li><Link className="font-semibold text-sm" to='/'>Home</Link></li>
        <li><Link className="font-semibold text-sm" to='/avaiableCamps'>Available Camps</Link></li>
        { !user ? <li><Link className="font-semibold text-sm" to='/login'>Join Us</Link></li> : ''}
    </>
    return (
        <div className="navbar bg-red-50 fixed z-10 top-0 md:px-12 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <Link to='/'>
                    <div className="flex items-center w-12 gap-3">
                        <img src={logo} alt="" />
                        <h2 className="text-3xl font-bold">MCMS</h2>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full">
                            <img
                                alt="photo"
                                src={user.photoURL} 
                                referrerPolicy="no-referrer"/>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 space-y-2 font-semibold text-center p-2 shadow">
                        <li>
                            <p className="justify-between">
                                {user.displayName}
                            </p>
                        </li>
                        <li><button className="w-full bg-gray-700 text-white hover:bg-gray-800" ><Link to='/dashboard'>Dashboard</Link></button></li>
                        <li><button onClick={handleLogout} className="w-full bg-gray-700 text-white hover:bg-gray-800">logout</button></li>
                    </ul>
                </div> : <>
                    <button className=" px-6 py-2 text-sm text-white font-medium my-2 bg-gray-700 rounded-lg hover:bg-gray-800"><Link to='register'>Register</Link></button>
                </>}
            </div>
        </div>
    );
};

export default Navber;