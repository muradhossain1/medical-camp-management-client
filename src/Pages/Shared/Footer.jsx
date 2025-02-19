import logoCamp from '../../../public/logo.png'
import { MdAddCall, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6"
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';


const Footer = () => {
    const { theme } = useAuth();
    return (
        <div className="mt-12">
            <footer className={`footer md:px-12 lg:px-20 text-base-content p-10 ${theme === 'light' ? 'bg-red-50' : 'bg-gray-800'}`}>
                <aside>
                    <img className="w-16" src={logoCamp} alt="" />
                    <div>
                        <span className="text-lg font-medium">Medical Camp Management System</span>
                        <br />
                        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to='/avaiableCamps' className="link link-hover">All Camps</Link>
                    <a className="link link-hover">Register Camp</a>
                    <a className="link link-hover">Payment</a>
                </nav>
                <nav className=" flex flex-col gap-1">
                    <h6 className="footer-title ">Contact</h6>
                    <a className=" flex items-center gap-2"><FaLocationDot /> Dhaka, Bangladesh</a>
                    <a className=" flex items-center gap-2"><MdEmail /> muradssq12@gmail.com</a>
                    <a className=" flex items-center gap-2"><MdAddCall />+8801872687900</a>
                </nav >
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;