import React from 'react';
import Section from '../components/Section';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VideosPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="animate-fade-in-up">
                <Section title="Videos & Replays">
                    <div className="max-w-2xl mx-auto bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl text-center border border-white/30 dark:border-uma-light-green/20">
                        <h3 className="text-3xl font-bold text-uma-dark-green dark:text-uma-light-green mb-4">Coming Soon!</h3>
                        <p className="text-uma-brown dark:text-gray-300 text-lg font-semibold">
                            We will be posting exciting race replays and exclusive interviews right here.
                        </p>
                        <p className="text-uma-brown dark:text-gray-300 text-lg font-semibold mt-2">
                            Keep an eye on this space for all the action!
                        </p>
                    </div>
                </Section>
            </div>
            <Footer />
        </>
    );
};

export default VideosPage;