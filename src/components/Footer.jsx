import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#14353F] text-white py-6">
            <div className="container mx-auto px-4">
                {/* Footer Text */}
                <div className="text-center mb-4">
                    <p>Copyright © 2024 connect4society</p>
                </div>

                {/* Footer Links */}
                <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
                    <Link
                        to="/"
                        className="text-white hover:text-orange-600 transition-colors duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-white hover:text-orange-600 transition-colors duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="/services"
                        className="text-white hover:text-orange-600 transition-colors duration-300"
                    >
                        Services
                    </Link>
                    <Link
                        to="/blog"
                        className="text-white hover:text-orange-600 transition-colors duration-300"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/contact"
                        className="text-white hover:text-orange-600 transition-colors duration-300"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
