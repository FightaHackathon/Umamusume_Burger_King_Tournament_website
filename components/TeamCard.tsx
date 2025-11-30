import React from 'react';
import type { Team } from '../types';

interface TeamCardProps {
    team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
    return (
        <div className="relative group bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:scale-[1.02] transition-transform duration-300 border-4 border-uma-yellow/50 hover:border-uma-yellow hover:shadow-2xl hover:shadow-uma-yellow/30 h-full flex flex-col">
            <div className="relative h-40 bg-gradient-to-r from-uma-green/70 to-uma-dark-green/70 flex items-center justify-center p-4">
                 <img className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover" src={team.logoUrl} alt={`${team.name} logo`} />
                 <div className="absolute bottom-0 left-0 bg-uma-yellow/90 px-4 py-1 rounded-tr-lg">
                    <h3 className="text-xl font-bold text-uma-brown">{team.name}</h3>
                 </div>
            </div>
            <div className="p-6 flex-grow">
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{team.description}"</p>
                <div>
                    <h4 className="font-bold text-uma-dark-green dark:text-uma-light-green mb-3 text-lg">Members:</h4>
                    <div className="flex flex-wrap items-start -mx-1">
                        {team.members.slice(0, 4).map((member) => (
                            <div key={member.name} className="text-center group/member w-20 flex-shrink-0 px-1 mb-2">
                                <img
                                    className="w-16 h-16 rounded-full border-2 border-uma-light-green object-cover shadow-sm mx-auto transition-transform duration-200 group-hover/member:scale-105 hover:!scale-110"
                                    src={member.avatarUrl}
                                    alt={member.name}
                                    title={member.name}
                                />
                                <p className="text-sm font-bold mt-1 text-uma-brown dark:text-gray-200 truncate">{member.name}</p>
                                <p className="text-xs text-uma-green dark:text-uma-yellow font-semibold opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-4 transition-all duration-300 ease-in-out">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                        {team.members.length > 4 && <div className="text-center w-20 px-1 mb-2 flex items-center justify-center h-24"><span className="text-gray-500 font-bold">...</span></div>}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="font-bold text-base text-uma-dark-green dark:text-uma-yellow bg-uma-yellow/30 dark:bg-uma-dark-green/50 px-3 py-2 rounded-md shadow-lg">View Details &rarr;</span>
            </div>
        </div>
    );
};

export default TeamCard;