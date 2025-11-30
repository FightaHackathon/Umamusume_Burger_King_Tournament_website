import React from 'react';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import NewsletterPage from './pages/NewsletterPage';
import TournamentSchedulePage from './pages/TournamentSchedulePage';
import VideosPage from './pages/VideosPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import TeamDetailPage from './pages/TeamDetailPage';
import ContactPage from './pages/ContactPage';

import RaceCoursePage from './pages/RaceCoursePage';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <HashRouter>
                <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-teal-50 to-uma-bg text-gray-800 dark:from-uma-bg-dark-secondary dark:via-uma-bg-dark dark:to-black dark:text-gray-200 transition-colors duration-500">
                    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/teams" element={<TeamsPage />} />
                            <Route path="/teams/:teamId" element={<TeamDetailPage />} />
                            <Route path="/schedule" element={<TournamentSchedulePage />} />
                            <Route path="/videos" element={<VideosPage />} />
                            <Route path="/newsletter" element={<NewsletterPage />} />
                            <Route path="/race-course" element={<RaceCoursePage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </main>
                </div>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;