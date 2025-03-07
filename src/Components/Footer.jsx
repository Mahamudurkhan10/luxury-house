import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
     return (
          <footer className="footer mt-8 p-10 bg-gray-800 text-white">
          <aside>
            <FaHome className="text-3xl"></FaHome> <NavLink to={'/'}> <button className="btn-ghost"> <p className="text-3xl text-green-500">Luxury <span className="text-green-100">Home</span></p></button> </NavLink>
          </aside> 
          <nav>
            <h6 className="footer-title">Services</h6> 
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav> 
          <nav>
            <h6 className="footer-title">Company</h6> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav> 
          <nav>
            <h6 className="footer-title">Legal</h6> 
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
     );
};

export default Footer;