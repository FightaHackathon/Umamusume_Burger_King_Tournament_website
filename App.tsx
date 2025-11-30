import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import NewsletterPage from './pages/NewsletterPage';
import TournamentSchedulePage from './pages/TournamentSchedulePage';
import VideosPage from './pages/VideosPage';
import RaceCoursePage from './pages/RaceCoursePage';
import ContactPage from './pages/ContactPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import TeamDetailPage from './pages/TeamDetailPage';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <HashRouter>
                <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-teal-50 to-uma-bg text-gray-800 dark:from-uma-bg-dark-secondary dark:via-uma-bg-dark dark:to-black dark:text-gray-200 transition-colors duration-500">
                    <Header />
                    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/teams" element={<TeamsPage />} />
                            <Route path="/teams/:teamId" element={<TeamDetailPage />} />
                            <Route path="/schedule" element={<TournamentSchedulePage />} />
                            <Route path="/race-course" element={<RaceCoursePage />} />
                            <Route path="/videos" element={<VideosPage />} />
                            <Route path="/newsletter" element={<NewsletterPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;
