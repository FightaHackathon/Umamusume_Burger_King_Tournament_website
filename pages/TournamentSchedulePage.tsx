
import React from 'react';
import Section from '../components/Section';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TournamentSchedulePage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="animate-fade-in-up">
                <Section title="Tournament Schedule">
                    <div className="max-w-2xl mx-auto bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl text-center border border-white/30 dark:border-uma-light-green/20">
                        <h3 className="text-3xl font-bold text-uma-dark-green dark:text-uma-light-green mb-4">Coming Soon!</h3>
                        <p className="text-uma-brown dark:text-gray-300 text-lg font-semibold">
                            We are finalizing the race dates and times.
                        </p>
                        <p className="text-uma-brown dark:text-gray-300 text-lg font-semibold mt-2">
                            Please check back later for the official schedule. Thank you for your patience!
                        </p>
                    </div>
                </Section>
            </div>
            <Footer />
        </>
    );
};

export default TournamentSchedulePage;