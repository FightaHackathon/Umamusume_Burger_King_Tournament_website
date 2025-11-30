import React from 'react';
import Section from '../components/Section';
import { MOCK_HOSTS } from '../constants';
import banner from '../images/uma_banner.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="animate-fade-in-up">
                <div className="mb-8">
                     <img 
                        src={banner} 
                        alt="Uma BK League Banner" 
                        className="w-full rounded-xl shadow-lg border-4 border-uma-yellow object-cover" 
                        style={{ aspectRatio: '3 / 1' }}
                    />
                </div>

                <div className="text-center py-12 px-4 bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 dark:border-uma-light-green/20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-uma-dark-green dark:text-uma-light-green">
                        Welcome to the
                        <span className="block text-uma-green dark:text-uma-green mt-2">Uma BK League Tournament!</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-uma-brown dark:text-gray-300 font-semibold">
                        A VRChat racing league for Umamusume fans, promoting community and competitive spirit through thrilling seasonal races.
                    </p>
                    <a href="#/teams" className="mt-8 inline-block bg-gradient-to-b from-uma-yellow to-uma-gold text-uma-brown font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white hover:animate-pulse-bright">
                        Meet The Teams
                    </a>
                </div>

                <Section title="About The Tournament">
                    <div className="max-w-4xl mx-auto bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md p-8 rounded-lg shadow-md text-lg text-uma-brown dark:text-gray-300 leading-relaxed font-semibold border border-white/30 dark:border-uma-light-green/20">
                        <p>
                            The Umamusume BK League is a vrchat league that is based around the racecourse area in our world. We help promote our community with fun and competitive races that helps our community engage with teams and competitive spirit. We aim to reach any audience of the vrchat community and Umamusume fans. Our league follows a season schedule and has planned out race days. Our total of 6 teams could be found around our instance.
                        </p>
                    </div>
                </Section>

                <Section title="Meet The Hosts">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {MOCK_HOSTS.map((host) => (
                            <div key={host.name} className="bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md rounded-lg shadow-lg overflow-hidden text-center p-6 transform hover:-translate-y-2 transition-transform duration-300 border-b-8 border-uma-green border-x border-t border-white/30 dark:border-uma-light-green/20">
                                <img src={host.imageUrl} alt={host.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-uma-yellow object-cover"/>
                                <h3 className="text-2xl font-bold text-uma-dark-green dark:text-uma-light-green">{host.name}</h3>
                                <p className="text-uma-green font-bold mb-3">{host.role}</p>
                                <p className="text-gray-600 dark:text-gray-300">{host.bio}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Website Creator">
                    <div className="flex justify-center">
                        <div className="max-w-md bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md rounded-lg shadow-lg overflow-hidden text-center p-6 transform hover:-translate-y-2 transition-transform duration-300 border-b-8 border-uma-gold border-x border-t border-white/30 dark:border-uma-light-green/20">
                            <img src="https://i1.sndcdn.com/artworks-G4zUJzbzMKB7cLAP-a82y4w-t500x500.jpg" alt="Artipog" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-uma-yellow object-cover"/>
                            <h3 className="text-2xl font-bold text-uma-dark-green dark:text-uma-light-green">Artipog</h3>
                            <p className="text-uma-gold font-bold mb-3">Creator</p>
                            <p className="text-gray-600 dark:text-gray-300">Loves Umamusume,VRCHAT, Coding and freelancing. Does it for the love of the game.</p>
                        </div>
                    </div>
                </Section>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;