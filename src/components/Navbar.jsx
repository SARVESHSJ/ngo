import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white p-4  w-full">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Name */}
    <div className="flex items-center space-x-2">
    <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
  <div className="flex flex-col items-start">
    <span className="text-2xl font-semibold">Connect4society(Reg)</span>
  <span className="text-xs">RRN-4-00277-2024-25</span>
  </div>
</div>


                {/* Desktop Links */}
                <ul className="hidden md:flex items-center flex-wrap space-x-6">
                    <li className="flex-shrink-0">
                        <Link
                            to="/"
                            className="text-black text-lg hover:text-orange-600 transition-colors duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="flex-shrink-0">
                        <Link
                            to="/about"
                            className="text-black text-lg hover:text-orange-600 transition-colors duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li className="flex-shrink-0">
                        <Link
                            to="/services"
                            className="text-black text-lg hover:text-orange-600 transition-colors duration-300"
                        >
                            Services
                        </Link>
                    </li>
                    <li className="flex-shrink-0">
                        <Link
                            to="/blog"
                            className="text-black text-lg hover:text-orange-600 transition-colors duration-300"
                        >
                            Blog
                        </Link>
                    </li>
                    <li className="flex-shrink-0">
                        <Link
                            to="/contact"
                            className="text-black text-lg hover:text-orange-600 transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="flex-shrink-0">
                        <Link
                            to="/contact"
                            className="text-orange-600 text-lg transition-colors duration-300 border-2 border-orange-500 px-4 py-2 rounded-md hover:text-white hover:bg-orange-600 whitespace-nowrap"
                        >
                            JOIN NOW
                        </Link>
                    </li>
                </ul>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none border-2 border-black p-2">
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="flex flex-col mt-4 space-y-4 md:hidden">
                    <li>
                        <Link
                            to="/"
                            className="block w-full text-black text-lg hover:text-orange-600 transition-colors duration-300 p-2 border-b border-gray-300"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="block w-full text-black text-lg hover:text-orange-600 transition-colors duration-300 p-2 border-b border-gray-300"
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="block w-full text-black text-lg hover:text-orange-600 transition-colors duration-300 p-2 border-b border-gray-300"
                            onClick={toggleMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            className="block w-full text-black text-lg hover:text-orange-600 transition-colors duration-300 p-2 border-b border-gray-300"
                            onClick={toggleMenu}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="block w-full text-black text-lg hover:text-orange-600 transition-colors duration-300 p-2 border-b border-gray-300"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
