import { useContext } from 'react';
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { ThemeContext } from './theme';
import ParticleBackground from './particales';

// Footer Component
const Footer = () => {
    const { theme } = useContext(ThemeContext)
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: LuGithub, href: 'https://github.com/mehulnawal', label: 'GitHub' },
        { icon: SlSocialLinkedin, href: 'https://www.linkedin.com/in/mehul-nawal-2b1492244/', label: 'LinkedIn' },
        { icon: BsWhatsapp, href: 'https://wa.me/9879216262?text=Hello, I saw your portfolio', label: 'Whatsapp' },
        { icon: CiMail, href: 'mailto:mehulnawal2904@gmail.com', label: 'Email' }
    ];

    return (
        <>
            <ParticleBackground />
            <footer className={`border-t border-gray-200 dark:border-gray-700 transition-colors duration-300 ${theme == "light" ? "bg-[#fff] text-[#000]" : "bg-[#0A0A0A] text-[#fff]"}`} id='footer'>


                <div className="max-w-6xl mx-auto px-6 py-8">
                    {/* Main Footer Content */}
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 ">

                        {/* Left Section - Branding */}
                        <div className="text-center md:text-left">
                            <h3 className="text-xl text-center text-[#3B82F6] font-bold">Mehul Nawal</h3>
                            <p className="text-sm">
                                Frontend Developer
                            </p>
                        </div>

                        {/* Center Section - Social Links */}
                        <div className="flex space-x-6">
                            {socialLinks.map((link, index) => {
                                const IconComponent = link.icon;
                                return (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`bg-[#202020] py-2 px-2 rounded-full w-fit hover:text-[#ffff] transition-colors duration-200 
                                      text-[#fff] transform hover:scale-110`}
                                        aria-label={link.label}
                                    >
                                        <IconComponent size={20} />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Right Section - Copyright */}
                        <p className="text-md">
                            © {currentYear} Mehul Nawal. All rights reserved.
                        </p>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;