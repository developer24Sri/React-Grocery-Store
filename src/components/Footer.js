import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:justify-start space-x-4 md:space-x-8">
                        <a href="https://www.linkedin.com/in/srivatsan-m-m-274456199/" className="text-green-500 hover:text-green-600 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/developer24Sri?tab=repositories" className="text-green-500 hover:text-green-600 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} />
                        </a>
                        <a href="mailto:vatsan24sri@gmail.com" className="text-green-500 hover:text-green-600 transition-colors duration-300">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                    <div className="mt-4 md:mt-0 text-center md:text-left text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Grocery-Store-Vatsite. All rights reserved.</p>
                        <p>Visit us at: Chennai, Royapettah</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
