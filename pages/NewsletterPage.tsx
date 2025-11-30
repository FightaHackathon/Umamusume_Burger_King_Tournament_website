


import React from 'react';

import Section from '../components/Section';

import umaMvp from '/images/uma-mvp.jpg';

import kingRace from '/images/king-racecourse.jpg';

import hierarchsRebrand from '/images/hierarchs-rebranding.jpg';

import leftoversRebrand from '/images/leftovers-rebranding.jpg';

import debutDelayed from '/images/debut-race-delayed.jpg';



const NewsletterPage: React.FC = () => {

    return (

        <>

            <div className="animate-fade-in-up">

                <Section title="The IURA Times - Issue #1">

                    <div className="max-w-4xl mx-auto bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/30 dark:border-uma-light-green/20">

                        

                        <div className="text-left font-serif text-uma-brown dark:text-gray-300 space-y-8">

                            

                            <article>

                                <h2 className="text-3xl font-bold text-center text-uma-dark-green dark:text-uma-light-green mb-4 font-sans">Successful First Raceday at the Park</h2>

                                <div className="my-6 flex justify-center">

                                    <img 

                                        src={umaMvp}

                                        alt="MVP of the Raceday - Shubaru with results: 1st place - 3rd race, 1st place - 5th race, 2nd place - 2nd race"

                                        className="rounded-lg shadow-xl border-4 border-uma-yellow max-w-md w-full object-contain"

                                    />

                                </div>

                                <h3 className="text-2xl font-semibold mt-6 mb-2 font-sans">Shubaru Claims MVP Victory Over the Competition</h3>

                                <p className="mb-4 leading-relaxed">

                                    Shubaru claims massive victories in races 3 and 5, as well as a second place finish in race 2, claiming to be the first MVP runner of the BK Racecourse. Shubaru's team–The Leftovers, expressed great gratitude and support for the MVP. Shubaru, expressing much happiness over the victories, is quite hungry for more.

                                </p>

                                <blockquote className="border-l-4 border-uma-green pl-4 italic text-xl my-6">

                                    "I'm aware of the competition getting better, and I will as well."

                                    <cite className="block text-right not-italic mt-2 font-sans">- Shubaru</cite>

                                </blockquote>

                            </article>



                            <hr className="border-t-2 border-uma-brown/20 dark:border-gray-500 my-8" />



                            <article>

                                <h2 className="text-3xl font-bold text-center text-uma-dark-green dark:text-uma-light-green mb-4 font-sans">Racing Scandal</h2>

                                <div className="my-6 flex justify-center">

                                    <img 

                                        src={kingRace}

                                        alt="KING RACECOURSE"

                                        className="rounded-lg shadow-xl border-4 border-uma-yellow max-w-md w-full object-contain"

                                    />

                                </div>

                                <p className="mb-4 leading-relaxed">

                                    Besides the victories, the Hierarchs were a wipeout to Gluttony's Chocominty, who claimed 1st in race 1. Top Gun managed to score a podium finish while the Guinea Pigs found moderate success with Ryuku and SmokedThunder. KamxDizzle also scored another win for the Leftovers which assisted in their MVP triumph. VertCPU was investigated for jumping during race 3, which was dropped. Stirfry was also under investigation for the use of OVR and suspicious gain of speed by spectators and footage. Though, all these were dropped as well. Stirfry, gaining a must needed win for the Hierarchs. Fanboy69 was a no show for the event. The Guinea Pigs are in need of a win following podium finishes with 2 out of their 5 members.

                                </p>

                                <blockquote className="border-l-4 border-uma-green pl-4 italic text-xl my-6">

                                    "I'm the team's brightest star.”

                                    <cite className="block text-right not-italic mt-2 font-sans">- KamxDizzle</cite>

                                </blockquote>

                                <blockquote className="border-l-4 border-uma-green pl-4 italic text-xl my-6">

                                    "I like turtles, and I hate Diddy."

                                    <cite className="block text-right not-italic mt-2 font-sans">- DollyofChrist (We for real Dolly? Couldn't say anything better????)</cite>

                                </blockquote>

                            </article>



                            <hr className="border-t-2 border-uma-brown/20 dark:border-gray-500 my-8" />



                            <article>

                                <h2 className="text-3xl font-bold text-center text-uma-dark-green dark:text-uma-light-green mb-4 font-sans">Team Rebrandings</h2>

                                 <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">

                                    <div className="flex items-center justify-center">

                                        <img 

                                            src={hierarchsRebrand}

                                            alt="THE HIERARCHS Rebranding"

                                            className="rounded-lg shadow-xl border-4 border-uma-yellow max-w-md w-full object-contain"

                                        />

                                    </div>

                                    <div className="flex items-center justify-center">

                                        <img 

                                            src={leftoversRebrand}

                                            alt="THE LEFTOVERS Rebranding"

                                            className="rounded-lg shadow-xl border-4 border-uma-yellow max-w-md w-full object-contain"

                                        />

                                    </div>

                                </div>

                                <p className="mb-4 leading-relaxed">

                                    The Hierarchs and The Leftovers have gone over some serious rebranding over the weekend with both the resignations of their courageous leaders. Kassetto becomes the official leader of The Hierarchs, finding the passing of the crown to be very fun but also very difficult. Though, hoping for much of the best. The Leftovers undergo leader change after their leader had also stepped down and handed over leadership to Shubaru. Both new captains are excited for the responsibility and challenges ahead.

                                </p>

                                 <blockquote className="border-l-4 border-uma-green pl-4 italic text-xl my-6">

                                    "I got this."

                                    <cite className="block text-right not-italic mt-2 font-sans">- Kassetto</cite>

                                </blockquote>

                            </article>



                            <hr className="border-t-2 border-uma-brown/20 dark:border-gray-500 my-8" />

                            

                            <article>

                                <h2 className="text-3xl font-bold text-center text-uma-dark-green dark:text-uma-light-green mb-4 font-sans">Make Debut Races Delayed Again</h2>

                                 <div className="my-6 flex justify-center">

                                    <img 

                                        src={debutDelayed}

                                        alt="DEBUT - THE STARTING POINT"

                                        className="rounded-lg shadow-xl border-4 border-uma-yellow max-w-md w-full object-contain"

                                    />

                                </div>

                                <p className="mb-4 leading-relaxed">

                                    The official season debut has been delayed once again by the race director, who expressed difficulty in finding a comfortable date for the official tournament to begin. Preparations have been constantly being added to the instance until then. The community, expressing well patience with the continued delaying of the official season calendar to begin. Many hope for many smaller graded races until then to help boost morale until the official tournament begins.

                                </p>

                                <p className="mb-4 leading-relaxed">

                                    However, many showed interest in the grand prize of the trophies along the way as well as the VRC+ for a year for the MVP of the season! Who will eventually hit the top step, is the main question.

                                </p>

                                <p className="mb-4 leading-relaxed">

                                    Until then, tune in next week for more news regarding the league and BK Park/Racecourse!

                                </p>



                                <div className="mt-8 text-right italic font-semibold">

                                    <p>Stealth</p>

                                    <p className="text-sm">Commentator</p>

                                    <p>Race Steward</p>

                                    <p>The Guinea Pigs</p>

                                </div>

                            </article>



                        </div>

                    </div>

                </Section>

            </div>

        </>

    );

};



export default NewsletterPage;
