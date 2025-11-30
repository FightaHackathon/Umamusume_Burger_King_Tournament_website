import React from 'react';
import Section from '../components/Section';
import TeamCard from '../components/TeamCard';
import { MOCK_TEAMS } from '../constants';
import { Link } from 'react-router-dom';

const TeamsPage: React.FC = () => {
    return (
        <>
            <div className="animate-fade-in-up">
                <Section title="Participating Teams">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {MOCK_TEAMS.map((team, index) => (
                           <Link to={`/teams/${team.id}`} key={team.id} className="block">
                             <div style={{ animationDelay: `${index * 100}ms` }} className="opacity-0 animate-fade-in-up h-full">
                               <TeamCard team={team} />
                             </div>
                           </Link>
                        ))}
                    </div>
                </Section>
            </div>
        </>
    );
};

export default TeamsPage;