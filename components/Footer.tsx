
import React from 'react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-uma-dark-green dark:bg-black/80 text-white py-6 mt-12 border-t-4 border-uma-yellow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="font-bold">&copy; {year} Uma BK League. All Rights Reserved.</p>
                <p className="text-sm text-uma-light-green dark:text-gray-400 mt-1">Inspired by Champions, Built for Fans.</p>
            </div>
        </footer>
    );
};

export default Footer;