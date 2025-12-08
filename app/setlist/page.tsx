'use client';

import { useState, useEffect } from 'react';
import { Music, Zap, Sparkles, Flame, Star, ExternalLink } from 'lucide-react';

// Energy messages that rotate on click
const energyMessages = {
  low: [
    "It's okay to take it slow. Small steps count!",
    "Low energy doesn't mean low value. Be gentle with yourself.",
    "Even slow progress is progress. Keep going!",
    "Rest is productive too. Your brain needs recovery time.",
  ],
  medium: [
    "You've got a good flow going. Let's use it wisely!",
    "Steady energy - perfect for focused work.",
    "You're in a good zone. Pick something meaningful.",
    "Medium energy = sustainable energy. Smart choice!",
  ],
  high: [
    "Let's GO! Time to tackle something big!",
    "High energy detected - channel it into your priority tasks!",
    "You're on fire! Don't waste this energy on small stuff.",
    "Peak performance mode. Make it count!",
  ],
};

// Badass boosts messages
const badassBooosts = [
  "You're not procrastinating, you're strategically waiting for the optimal dopamine window!",
  "Your brain is literally wired to do amazing things - it just needs the right spark.",
  "Reminder: You've done hard things before. You can do hard things now.",
  "That task you're avoiding? It's probably a 5-minute job. LFG!",
  "Your VARIANT brain is a superpower, not a limitation.",
  "You don't have to feel motivated to start. Start to feel motivated.",
  "Every expert was once a beginner who refused to quit.",
  "You're not behind. You're on YOUR timeline.",
  "That overwhelm? It's just your brain processing. Breathe through it.",
  "You've survived 100% of your worst days. You're stronger than you think.",
];

// AI action suggestions based on energy level
const actionSuggestions = {
  low: [
    "Review your task list and cross off anything already done",
    "Set up your workspace for tomorrow's high-energy session",
    "Send one quick message you've been putting off",
    "Organize one small area of your desk or digital files",
  ],
  medium: [
    "Tackle a medium-priority task from your Crew list",
    "Review and update your project progress in Backstage",
    "Schedule your high-energy tasks for peak times",
    "Work on documentation or planning tasks",
  ],
  high: [
    "Attack your most challenging task right NOW",
    "Start that project you've been putting off",
    "Have those difficult conversations you've been avoiding",
    "Deep work time - block distractions and GO!",
  ],
};

export default function Setlist() {
  const [currentEnergy, setCurrentEnergy] = useState<'low' | 'medium' | 'high'>('medium');
  const [energyMessageIndex, setEnergyMessageIndex] = useState(0);
  const [currentBoost, setCurrentBoost] = useState('');
  const [showActionSuggestion, setShowActionSuggestion] = useState(false);
  const [actionSuggestion, setActionSuggestion] = useState('');

  // Playlist links (admin-controlled - placeholder for now)
  const playlists = [
    { name: 'Focus Flow', description: 'Deep concentration music', url: 'https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j' },
    { name: 'Energy Boost', description: 'High-energy tracks', url: 'https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP' },
    { name: 'Chill Vibes', description: 'Low-key productive beats', url: 'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6' },
  ];

  const handleEnergyClick = (level: 'low' | 'medium' | 'high') => {
    setCurrentEnergy(level);
    setEnergyMessageIndex((prev) => (prev + 1) % energyMessages[level].length);
    setShowActionSuggestion(false);
  };

  const handleLFG = () => {
    const randomBoost = badassBooosts[Math.floor(Math.random() * badassBooosts.length)];
    setCurrentBoost(randomBoost);

    // After showing boost, show action suggestion
    setTimeout(() => {
      const suggestions = actionSuggestions[currentEnergy];
      const randomAction = suggestions[Math.floor(Math.random() * suggestions.length)];
      setActionSuggestion(randomAction);
      setShowActionSuggestion(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 pb-24 md:pb-8">
      <div className="max-w-4xl mx-auto py-6">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="header-gradient-setlist rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Music className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-supernova text-white tracking-tight">
                  SETLIST
                </h1>
                <p className="text-base sm:text-lg font-arp-display text-white/80 mt-1">
                  Your hype station
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Spotify Integration */}
          <div className="p-6 rounded-xl border-2 border-azure/30 bg-azure/10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Music className="w-5 h-5 text-azure" />
              Focus Playlists
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {playlists.map((playlist, index) => (
                <a
                  key={index}
                  href={playlist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-black/30 border border-white/10 hover:border-azure/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white group-hover:text-azure transition-colors">
                      {playlist.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-azure transition-colors" />
                  </div>
                  <p className="text-sm text-gray-400">{playlist.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Energy Tracker */}
          <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-magenta" />
              Energy Tracker
            </h2>
            <p className="text-gray-400 mb-4">How are you feeling right now?</p>

            {/* Energy Buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
              <button
                onClick={() => handleEnergyClick('low')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  currentEnergy === 'low'
                    ? 'bg-vivid-cyan text-black'
                    : 'bg-white/5 text-vivid-cyan hover:bg-vivid-cyan/20'
                }`}
              >
                <Star className="w-5 h-5" />
                Low
              </button>
              <button
                onClick={() => handleEnergyClick('medium')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  currentEnergy === 'medium'
                    ? 'bg-magenta text-white'
                    : 'bg-white/5 text-magenta hover:bg-magenta/20'
                }`}
              >
                <Zap className="w-5 h-5" />
                Medium
              </button>
              <button
                onClick={() => handleEnergyClick('high')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  currentEnergy === 'high'
                    ? 'bg-vivid-yellow-green text-black'
                    : 'bg-white/5 text-vivid-yellow-green hover:bg-vivid-yellow-green/20'
                }`}
              >
                <Flame className="w-5 h-5" />
                High
              </button>
            </div>

            {/* Energy Message */}
            <div className="p-4 rounded-lg bg-black/30 border border-white/10">
              <p className="text-white font-medium">
                {energyMessages[currentEnergy][energyMessageIndex]}
              </p>
            </div>
          </div>

          {/* Badass Boosts */}
          <div className="p-6 rounded-xl border-2 border-magenta/30 bg-gradient-to-br from-magenta/10 to-vivid-pink/10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-magenta" />
              Badass Boosts
            </h2>
            <p className="text-gray-400 mb-4">Need a quick motivation hit?</p>

            {/* LFG Button */}
            <button
              onClick={handleLFG}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-magenta text-magenta font-bold text-lg hover:bg-white transition-all shadow-[0_0_30px_rgba(255,0,142,0.5)] hover:shadow-[0_0_40px_rgba(255,0,142,0.7)]"
              style={{ backgroundColor: '#FF008E', color: '#000' }}
            >
              <span className="text-magenta" style={{ color: '#FF008E' }}>LFG!</span>
            </button>

            {/* Boost Message */}
            {currentBoost && (
              <div className="mt-4 p-4 rounded-lg bg-black/30 border border-magenta/30 animate-fade-in">
                <p className="text-white font-medium">{currentBoost}</p>
              </div>
            )}

            {/* Action Suggestion */}
            {showActionSuggestion && (
              <div className="mt-4 p-4 rounded-lg bg-vivid-yellow-green/10 border border-vivid-yellow-green/30 animate-fade-in">
                <p className="text-vivid-yellow-green font-bold mb-1">NOW DO THIS:</p>
                <p className="text-white">{actionSuggestion}</p>
              </div>
            )}
          </div>

          {/* Quick Tips */}
          <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5">
            <h3 className="text-lg font-bold text-white mb-4">Quick Tips for VARIANT Brains</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-magenta">-</span>
                Track your energy throughout the day to find your peak performance times
              </li>
              <li className="flex items-start gap-2">
                <span className="text-magenta">-</span>
                Match your highest-priority tasks to your highest-energy windows
              </li>
              <li className="flex items-start gap-2">
                <span className="text-magenta">-</span>
                Use music to help shift your state when you need an energy boost
              </li>
              <li className="flex items-start gap-2">
                <span className="text-magenta">-</span>
                Don't fight low energy - use it for administrative or creative tasks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
