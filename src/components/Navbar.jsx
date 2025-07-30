import logo from "../assets/logo.webp";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-2 sm:gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/badhon1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/RyUk346"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/MahmudurRahmanBadhon/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/badho_n/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
