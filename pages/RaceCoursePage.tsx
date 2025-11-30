import React from 'react';
import RaceCourseMap from '../components/RaceCourseMap';
import Section from '../components/Section';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RaceCoursePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
        <Section title="Burger King Race Course">
          <RaceCourseMap />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default RaceCoursePage;
