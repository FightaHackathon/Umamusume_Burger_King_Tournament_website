import React from 'react';
import RaceCourseMap from '../components/RaceCourseMap';
import Section from '../components/Section';

const RaceCoursePage: React.FC = () => {
  return (
    <>
      <main className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
        <Section title="Burger King Race Course">
          <RaceCourseMap />
        </Section>
      </main>
    </>
  );
};

export default RaceCoursePage;
