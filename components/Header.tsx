import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import logo from '../images/newlogo.png';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const activeLinkStyle = {
        color: '#FFEB3B',
        textShadow: '0 0 8px #FFEB3B',
    };

    return (
        <header className="bg-uma-dark-green/80 dark:bg-black/70 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg border-b-4 border-uma-yellow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#/" className="flex items-center text-2xl md:text-3xl font-extrabold text-white tracking-wider" style={{ textShadow: '2px 2px 0px #FFC107, 4px 4px 0px #2E7D32' }}>
                            <img src={logo} alt="Uma BK League Logo" className="h-12 w-12 mr-3" />
                            Uma BK League
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <nav className="hidden md:flex items-center space-x-8">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path.replace('#', '')}
                                    style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                                    className="text-lg font-bold hover:text-uma-yellow transition-colors duration-300"
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                        
                        <ThemeToggle />

                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-white hover:text-uma-yellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-uma-yellow">
                                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-uma-dark-green/95 dark:bg-black/90 backdrop-blur-sm absolute w-full animate-slide-in-right">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                             <NavLink
                                key={link.name}
                                to={link.path.replace('#', '')}
                                onClick={() => setIsMenuOpen(false)}
                                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                                className="block px-3 py-2 rounded-md text-base font-bold hover:bg-uma-green hover:text-uma-yellow"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;