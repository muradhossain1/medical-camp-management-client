import logoCamp from '../../../public/logo.png'


const Footer = () => {
    return (
        <div className="mt-12">
            <footer className="footer md:px-12 lg:px-20 bg-base-200 text-base-content p-10">
                <aside>
                    <img className="w-16" src={logoCamp} alt="" />
                    <p>
                        <span className="text-lg font-medium">Medical Camp Management System</span>
                        <br />
                        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">All Camps</a>
                    <a className="link link-hover">Join Camp</a>
                    <a className="link link-hover">Payment</a>
                    <a className="link link-hover">Register</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
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