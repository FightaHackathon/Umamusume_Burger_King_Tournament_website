import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

// FIX: Pass SectionProps to React.FC to correctly type the component's props.
const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
    return (
        <section className={`py-12 md:py-16 ${className}`}>
            <div className="text-center mb-12 relative">
                <div className="inline-block bg-gradient-to-r from-uma-green/80 to-uma-dark-green/80 backdrop-blur-sm px-8 py-3 rounded-full shadow-lg border border-white/20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                        {title}
                    </h2>
                </div>
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-1 bg-uma-yellow rounded-full"></div>
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-8"></div>
                 <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full transform translate-x-8"></div>
            </div>
            {children}
        </section>
    );
};

export default Section;
