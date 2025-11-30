import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_TEAMS } from '../constants';
import type { Player } from '../types';
import Section from '../components/Section';

const TeamDetailPage: React.FC = () => {
    const { teamId } = useParams<{ teamId: string }>();
    const team = MOCK_TEAMS.find(t => t.id === parseInt(teamId || ''));

    const [selectedMember, setSelectedMember] = useState<Player | null>(null);

    useEffect(() => {
        // Automatically select the first member when the team data is available
        if (team && team.members.length > 0) {
            setSelectedMember(team.members[0]);
        }
    }, [team]);

    // Handle case where team is not found
    if (!team) {
        return (
            <>
                
                <div className="text-center py-20 animate-fade-in-up">
                    <h1 className="text-4xl font-bold text-uma-dark-green dark:text-uma-light-green">Team Not Found</h1>
                    <p className="mt-4 text-lg text-uma-brown dark:text-gray-300">The team you're looking for doesn't exist.</p>
                    <Link to="/teams" className="mt-8 inline-block bg-gradient-to-b from-uma-yellow to-uma-gold text-uma-brown font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white hover:animate-pulse-bright">
                        Back to All Teams
                    </Link>
                </div>
                
            </>
        );
    }

    return (
        <>
            
            <div className="animate-fade-in-up">
                {/* Team Header */}
                <div className="relative text-center p-8 md:p-12 bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 dark:border-uma-light-green/20 mb-12">
                    <Link to="/teams" className="absolute top-4 left-4 text-uma-green dark:text-uma-yellow font-bold hover:underline flex items-center gap-1 transition-transform hover:-translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        All Teams
                    </Link>
                    <img src={team.logoUrl} alt={`${team.name} logo`} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-uma-yellow object-cover shadow-lg"/>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-uma-dark-green dark:text-uma-light-green" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>{team.name}</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-uma-brown dark:text-gray-300 font-semibold italic">"{team.description}"</p>
                </div>

                <Section title="Meet the Members">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Members List */}
                        <div className="lg:col-span-1 bg-white/50 dark:bg-uma-bg-dark-secondary/50 backdrop-blur-sm p-4 rounded-lg shadow-md border border-white/20 dark:border-uma-light-green/20">
                            <h3 className="text-xl font-bold text-uma-dark-green dark:text-uma-light-green mb-4 px-2">Roster</h3>
                            <ul className="space-y-2">
                                {team.members.map(member => (
                                    <li key={member.name}>
                                        <button 
                                            onClick={() => setSelectedMember(member)}
                                            className={`group w-full flex items-center p-3 rounded-lg text-left transition-all duration-200 transform-gpu ${selectedMember?.name === member.name ? 'bg-uma-yellow/50 dark:bg-uma-yellow/30 scale-105 shadow-md' : 'hover:bg-uma-light-green/50 dark:hover:bg-uma-green/30 hover:translate-x-1'}`}
                                        >
                                            <img src={member.avatarUrl} alt={member.name} className="w-12 h-12 rounded-full mr-4 border-2 border-uma-green object-cover flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-uma-yellow/40" />
                                            <div className="flex-grow">
                                                <p className="font-bold text-uma-brown dark:text-gray-200">{member.name}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                                            </div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Selected Member Details */}
                        <div className="lg:col-span-2">
                            {selectedMember && (
                                <div key={selectedMember.name} className="bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md p-8 rounded-lg shadow-xl text-center md:text-left flex flex-col md:flex-row items-center gap-8 border-t-8 border-uma-yellow h-full">
                                    <img src={selectedMember.avatarUrl} alt={selectedMember.name} className="w-40 h-40 rounded-full border-4 border-uma-green object-cover shadow-2xl flex-shrink-0 animate-zoom-in"/>
                                    <div>
                                        <h2 className="text-3xl font-bold text-uma-dark-green dark:text-uma-light-green animate-text-highlight-pulse">{selectedMember.name}</h2>
                                        <p className="text-xl font-semibold text-uma-green mb-4">{selectedMember.role}</p>
                                        <p className="text-lg text-uma-brown dark:text-gray-300 leading-relaxed whitespace-pre-line">{selectedMember.bio}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Section>
            </div>
            
        </>
    );
};

export default TeamDetailPage;