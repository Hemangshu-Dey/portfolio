import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-11 transition-transform duration-200 ease-in-out hover:scale-110" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"
        className="transition-transform duration-200 ease-in-out hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"
        className="transition-transform duration-200 ease-in-out hover:scale-110">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer"
        className="transition-transform duration-200 ease-in-out hover:scale-110">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer"
        className="transition-transform duration-200 ease-in-out hover:scale-110">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
