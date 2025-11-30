import React, { useState, useMemo } from 'react';
import { MOCK_HOSTS } from '../constants';

interface Leader {
  name: string;
  role: string;
  bio?: string;
  image: string;
}

const Contact: React.FC = () => {
  // Prepare leaders using existing constants for consistent data, but enforce the requested profile images
  const leaders: Leader[] = useMemo(() => {
    const stirfry = MOCK_HOSTS.find(h => h.name === 'Stirfry');
    const stealth = MOCK_HOSTS.find(h => h.name === 'Stealth');

    return [
      {
        name: 'Stirfry',
        role: stirfry?.role || 'Owner/Race Director',
        bio: stirfry?.bio,
        image: '/images/stirfry_profile.png',
      },
      {
        name: 'Stealth',
        role: stealth?.role || 'Announcer/Steward',
        bio: stealth?.bio,
        image: '/images/stealth_profile.png',
      },
    ];
  }, []);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Leader | null>(null);

  const handleOpen = (leader: Leader) => {
    setSelected(leader);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center py-8 px-4 bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 dark:border-uma-light-green/20">
        <p className="max-w-3xl mx-auto text-lg text-uma-brown dark:text-gray-300 font-semibold">
          If you want to join the race or the community, contact either one of the two main people of the community.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {leaders.map((leader) => (
          <button
            key={leader.name}
            onClick={() => handleOpen(leader)}
            className="group text-left bg-white/60 dark:bg-uma-bg-dark-secondary/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden p-6 border-b-8 border-uma-green border-x border-t border-white/30 dark:border-uma-light-green/20 transform transition duration-300 hover:-translate-y-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-uma-yellow/60"
            aria-label={`Open details for ${leader.name}`}
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={leader.image}
                alt={`${leader.name} profile`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-uma-yellow shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="mt-4 text-2xl font-extrabold text-uma-dark-green dark:text-uma-light-green">
                {leader.name}
              </h3>
              <p className="text-uma-green font-bold mb-2">{leader.role}</p>
              {leader.bio && (
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3 max-w-lg">
                  {leader.bio}
                </p>
              )}
              {!leader.bio && (
                <p className="text-gray-700 dark:text-gray-300 max-w-lg">
                  Click to view more details.
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {open && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          <div className="relative z-10 max-w-3xl w-[92%] md:w-[80%] bg-white/90 dark:bg-uma-bg-dark-secondary/90 rounded-2xl shadow-2xl border border-white/30 dark:border-uma-light-green/20">
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={selected.image}
                  alt={`${selected.name} enlarged profile`}
                  className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-uma-yellow shadow-xl"
                />
                <div className="text-center md:text-left">
                  <h4 id="contact-modal-title" className="text-3xl font-extrabold text-uma-dark-green dark:text-uma-light-green">
                    {selected.name}
                  </h4>
                  <p className="text-uma-green font-bold mt-1">{selected.role}</p>
                  <p className="mt-3 text-gray-800 dark:text-gray-200 whitespace-pre-line">
                    {selected.bio || 'More information coming soon!'}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleClose}
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-uma-green to-uma-dark-green text-white font-semibold shadow hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-uma-yellow/60"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
