import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';

interface LeaderImage {
    name: string;
    role: string;
    src: string;
    bio?: string;
}

const images: LeaderImage[] = [
    {
        name: 'Stirfry',
        role: 'Owner/Race Director',
        src: '/images/stirfry_profile.png',
        bio: 'More information coming soon!',
    },
    {
        name: 'Stealth',
        role: 'Announcer/Steward',
        src: '/images/stealth_profile.png',
        bio: 'Race Steward and League announcer. Part of Team Guinea Pigs and glad to be apart of the community and team.',
    },
];

const ContactPage: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<LeaderImage | null>(null);

    const openModal = (img: LeaderImage) => { setSelected(img); setOpen(true); };
    const closeModal = () => { setOpen(false); setSelected(null); };

    return (
        <>
            <Header />
            <div className="animate-fade-in-up">
                <div className="text-center py-12 px-4 bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 dark:border-uma-light-green/20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-uma-dark-green dark:text-uma-light-green">
                        Contact Us
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-uma-brown dark:text-gray-300 font-semibold">
                        If you want to join the race or the community, contact either one of the two main people of the community.
                    </p>
                </div>

                <Section title="Community Leaders">
                    <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                        {images.map((img) => (
                            <button
                                key={img.name}
                                onClick={() => openModal(img)}
                                className="group w-full text-left bg-white/70 dark:bg-uma-bg-dark-secondary/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 dark:border-uma-light-green/20 overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-uma-yellow/60"
                                aria-label={`Open details for ${img.name}`}
                            >
                                <div className="relative w-full">
                                    <img
                                        src={img.src}
                                        alt={`${img.name} full profile`}
                                        className="w-full h-auto object-contain md:object-cover md:max-h-[520px] transition-transform duration-300 group-hover:scale-[1.01]"
                                    />
                                </div>
                                <div className="p-4 md:p-6">
                                    <h3 className="text-2xl font-extrabold text-uma-dark-green dark:text-uma-light-green">{img.name}</h3>
                                    <p className="text-uma-green font-bold">{img.role}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </Section>
            </div>

            {/* Scrollable Modal for enlarged viewing and details */}
            {open && selected && (
                <div
                    className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-10"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal} />

                    {/* Modal panel */}
                    <div className="relative z-10 max-w-5xl w-[94%] md:w-[88%] bg-white/95 dark:bg-uma-bg-dark-secondary/95 rounded-2xl shadow-2xl border border-white/30 dark:border-uma-light-green/20 my-6">
                        {/* Make the content area scroll when taller than viewport */}
                        <div className="p-4 md:p-6 max-h-[90vh] overflow-auto">
                            <div className="flex flex-col gap-4">
                                <img
                                    src={selected.src}
                                    alt={`${selected.name} enlarged profile`}
                                    className="w-full h-auto object-contain rounded-lg border-4 border-uma-yellow bg-black/10"
                                />
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <div>
                                        <h4 className="text-3xl font-extrabold text-uma-dark-green dark:text-uma-light-green">{selected.name}</h4>
                                        <p className="text-uma-green font-bold">{selected.role}</p>
                                        {selected.bio && (
                                            <p className="mt-2 text-gray-800 dark:text-gray-200 whitespace-pre-line">{selected.bio}</p>
                                        )}
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="self-end md:self-auto px-5 py-2 rounded-lg bg-gradient-to-r from-uma-green to-uma-dark-green text-white font-semibold shadow hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-uma-yellow/60"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default ContactPage;
