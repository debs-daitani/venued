'use client';

import { useState, useEffect } from 'react';
import { Music, Zap, Sparkles, Flame, Star, ExternalLink, Plus, X, TrendingUp, Clock, Save } from 'lucide-react';
import Link from 'next/link';

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

// Types
interface EnergyLog {
  id: string;
  level: 'low' | 'medium' | 'high';
  timestamp: string;
}

interface SavedBoost {
  id: string;
  message: string;
  savedAt: string;
}

interface UserPlaylist {
  id: string;
  name: string;
  url: string;
}

// Storage helpers
const getEnergyLogs = (): EnergyLog[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem('venued_energy_logs');
  return data ? JSON.parse(data) : [];
};

const saveEnergyLog = (level: 'low' | 'medium' | 'high') => {
  const logs = getEnergyLogs();
  logs.unshift({
    id: Date.now().toString(),
    level,
    timestamp: new Date().toISOString(),
  });
  // Keep last 50 entries
  localStorage.setItem('venued_energy_logs', JSON.stringify(logs.slice(0, 50)));
};

const getSavedBoosts = (): SavedBoost[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem('venued_saved_boosts');
  return data ? JSON.parse(data) : [];
};

const saveBoost = (message: string) => {
  const boosts = getSavedBoosts();
  boosts.unshift({
    id: Date.now().toString(),
    message,
    savedAt: new Date().toISOString(),
  });
  localStorage.setItem('venued_saved_boosts', JSON.stringify(boosts.slice(0, 20)));
};

const getUserPlaylists = (): UserPlaylist[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem('venued_user_playlists');
  return data ? JSON.parse(data) : [];
};

const saveUserPlaylist = (playlist: UserPlaylist) => {
  const playlists = getUserPlaylists();
  playlists.push(playlist);
  localStorage.setItem('venued_user_playlists', JSON.stringify(playlists));
};

const deleteUserPlaylist = (id: string) => {
  const playlists = getUserPlaylists().filter(p => p.id !== id);
  localStorage.setItem('venued_user_playlists', JSON.stringify(playlists));
};

export default function Setlist() {
  const [currentEnergy, setCurrentEnergy] = useState<'low' | 'medium' | 'high'>('medium');
  const [energyMessageIndex, setEnergyMessageIndex] = useState(0);
  const [currentBoost, setCurrentBoost] = useState('');
  const [showActionSuggestion, setShowActionSuggestion] = useState(false);
  const [actionSuggestion, setActionSuggestion] = useState('');
  const [energyLogs, setEnergyLogs] = useState<EnergyLog[]>([]);
  const [savedBoosts, setSavedBoosts] = useState<SavedBoost[]>([]);
  const [userPlaylists, setUserPlaylists] = useState<UserPlaylist[]>([]);
  const [showAddPlaylist, setShowAddPlaylist] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [newPlaylistUrl, setNewPlaylistUrl] = useState('');

  useEffect(() => {
    setEnergyLogs(getEnergyLogs());
    setSavedBoosts(getSavedBoosts());
    setUserPlaylists(getUserPlaylists());
  }, []);

  const handleEnergyClick = (level: 'low' | 'medium' | 'high') => {
    setCurrentEnergy(level);
    setEnergyMessageIndex((prev) => (prev + 1) % energyMessages[level].length);
    setShowActionSuggestion(false);
    saveEnergyLog(level);
    setEnergyLogs(getEnergyLogs());
  };

  const handleSaveBoost = () => {
    if (currentBoost) {
      saveBoost(currentBoost);
      setSavedBoosts(getSavedBoosts());
    }
  };

  const handleAddPlaylist = () => {
    if (newPlaylistName && newPlaylistUrl) {
      saveUserPlaylist({
        id: Date.now().toString(),
        name: newPlaylistName,
        url: newPlaylistUrl,
      });
      setUserPlaylists(getUserPlaylists());
      setNewPlaylistName('');
      setNewPlaylistUrl('');
      setShowAddPlaylist(false);
    }
  };

  const handleDeletePlaylist = (id: string) => {
    deleteUserPlaylist(id);
    setUserPlaylists(getUserPlaylists());
  };

  // Get today's energy logs
  const todayLogs = energyLogs.filter(log => {
    const today = new Date().toISOString().split('T')[0];
    return log.timestamp.startsWith(today);
  });

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
          {/* User Playlists */}
          <div className="p-6 rounded-xl border-2 border-azure/30 bg-azure/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Music className="w-5 h-5 text-azure" />
                My Focus Playlists
              </h2>
              <button
                onClick={() => setShowAddPlaylist(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-azure text-black font-semibold hover:bg-white transition-all"
              >
                <Plus className="w-4 h-4" />
                Add Playlist
              </button>
            </div>

            {userPlaylists.length === 0 ? (
              <div className="text-center py-8">
                <Music className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400 mb-2">No playlists added yet</p>
                <p className="text-sm text-gray-500">Add your favorite Spotify playlists to access them quickly</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {userPlaylists.map((playlist) => (
                  <div
                    key={playlist.id}
                    className="p-4 rounded-lg bg-black/30 border border-white/10 hover:border-azure/50 transition-all group relative"
                  >
                    <a
                      href={playlist.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white group-hover:text-azure transition-colors">
                          {playlist.name}
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-azure transition-colors" />
                      </div>
                    </a>
                    <button
                      onClick={() => handleDeletePlaylist(playlist.id)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/50"
                    >
                      <X className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Add Playlist Modal */}
          {showAddPlaylist && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="bg-dark-grey-azure rounded-2xl border border-magenta/30 max-w-md w-full p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Add Playlist</h2>
                  <button
                    onClick={() => setShowAddPlaylist(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400 hover:text-white" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Playlist Name</label>
                    <input
                      type="text"
                      value={newPlaylistName}
                      onChange={(e) => setNewPlaylistName(e.target.value)}
                      placeholder="My Focus Mix"
                      className="w-full px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white focus:border-magenta focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Spotify URL</label>
                    <input
                      type="text"
                      value={newPlaylistUrl}
                      onChange={(e) => setNewPlaylistUrl(e.target.value)}
                      placeholder="https://open.spotify.com/playlist/..."
                      className="w-full px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white focus:border-magenta focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setShowAddPlaylist(false)}
                    className="flex-1 py-3 rounded-lg border-2 border-white/10 text-white font-semibold hover:bg-white/5"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddPlaylist}
                    className="flex-1 py-3 rounded-lg bg-azure text-black font-bold hover:bg-white transition-all"
                  >
                    Add Playlist
                  </button>
                </div>
              </div>
            </div>
          )}

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

          {/* Badass Brain Boost */}
          <div className="p-6 rounded-xl border-2 border-magenta/30 bg-gradient-to-br from-magenta/10 to-vivid-pink/10">
            <h2 className="text-xl font-supernova text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-magenta" />
              Badass Brain Boost
            </h2>
            <p className="text-gray-400 font-josefin mb-4">Need a quick motivation hit?</p>

            {/* LFG Button with rock fingers icon */}
            <button
              onClick={handleLFG}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-magenta text-black font-bold text-lg hover:bg-neon-cyan transition-all shadow-[0_0_30px_rgba(255,0,142,0.5)] hover:shadow-[0_0_40px_rgba(0,240,233,0.7)] flex items-center justify-center gap-2"
            >
              <span className="text-2xl">🤘</span>
              LFG!
            </button>

            {/* Boost Message */}
            {currentBoost && (
              <div className="mt-4 p-4 rounded-lg bg-black/30 border border-magenta/30 animate-fade-in">
                <p className="text-white font-medium mb-3">{currentBoost}</p>
                <button
                  onClick={handleSaveBoost}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-magenta/20 text-magenta font-semibold hover:bg-magenta/30 transition-all"
                >
                  <Save className="w-4 h-4" />
                  Save this boost
                </button>
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

          {/* Today's Energy Log */}
          {todayLogs.length > 0 && (
            <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-vivid-cyan" />
                Today's Energy Log
              </h3>
              <div className="flex flex-wrap gap-2">
                {todayLogs.map((log) => {
                  const time = new Date(log.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                  return (
                    <div
                      key={log.id}
                      className={`px-3 py-2 rounded-lg border ${
                        log.level === 'high'
                          ? 'bg-vivid-yellow-green/10 border-vivid-yellow-green/30 text-vivid-yellow-green'
                          : log.level === 'medium'
                          ? 'bg-magenta/10 border-magenta/30 text-magenta'
                          : 'bg-vivid-cyan/10 border-vivid-cyan/30 text-vivid-cyan'
                      }`}
                    >
                      <span className="font-semibold capitalize">{log.level}</span>
                      <span className="text-xs text-gray-400 ml-2">{time}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                <Link href="/tour" className="text-vivid-cyan hover:text-white transition-colors">
                  View Tour →
                </Link> to schedule tasks based on your energy patterns
              </p>
            </div>
          )}

          {/* Saved Boosts */}
          {savedBoosts.length > 0 && (
            <div className="p-6 rounded-xl border-2 border-magenta/30 bg-magenta/5">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-magenta" />
                Your Saved Boosts
              </h3>
              <div className="space-y-3">
                {savedBoosts.slice(0, 5).map((boost) => (
                  <div
                    key={boost.id}
                    className="p-3 rounded-lg bg-black/30 border border-magenta/20"
                  >
                    <p className="text-white font-medium">{boost.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Saved {new Date(boost.savedAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

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
