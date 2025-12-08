'use client';

import { useState, useEffect } from 'react';
import {
  Zap,
  Music,
  Clock,
  RefreshCw,
  MessageSquare,
  Users,
  TrendingUp,
  Trophy,
  Sparkles,
} from 'lucide-react';
import { generateSampleADHDData } from '@/lib/adhd';

// Entourage modules configuration - spells E-N-T-O-U-R-A-G-E
const modules = [
  {
    id: 'electrify',
    letter: 'E',
    name: 'Electrify',
    subtitle: "Fuck 'Stuck' - let's get moving!",
    icon: Zap,
    letterColor: '#FF008E',
    gradient: 'entourage-e-electrify',
    description: 'AI breaks down tasks into micro-steps',
  },
  {
    id: 'new-releases',
    letter: 'N',
    name: 'New Releases',
    subtitle: 'Your demo tape studio!',
    icon: Music,
    letterColor: '#C9005C',
    gradient: 'entourage-n-new-releases',
    description: 'Dump ideas, capture pivots, track inspiration',
  },
  {
    id: 'tune-up',
    letter: 'T',
    name: 'Tune Up',
    subtitle: 'Focused A/F',
    icon: Clock,
    letterColor: '#FF008E',
    gradient: 'entourage-t-tune-up',
    description: 'Focus timer, hyperfocus logger, time perception',
  },
  {
    id: 'outro',
    letter: 'O',
    name: 'Outro',
    subtitle: 'Rewrite the lyric',
    icon: RefreshCw,
    letterColor: '#00F0E9',
    gradient: 'entourage-o-outro',
    description: 'Reframe negative thoughts with AI',
  },
  {
    id: 'unplugged',
    letter: 'U',
    name: 'Unplugged',
    subtitle: 'Time to duet',
    icon: Users,
    letterColor: '#00A29D',
    gradient: 'entourage-u-unplugged',
    description: 'Virtual body doubling companions',
  },
  {
    id: 'retune',
    letter: 'R',
    name: 'Retune',
    subtitle: 'Reset & recharge your batteries',
    icon: RefreshCw,
    letterColor: '#00F0E9',
    gradient: 'entourage-r-retune',
    description: 'Reset protocols for different moods',
  },
  {
    id: 'amplify',
    letter: 'A',
    name: 'Amplify',
    subtitle: 'Revenue Re-VENUED',
    icon: TrendingUp,
    letterColor: '#D3FF2C',
    gradient: 'entourage-a-amplify',
    description: 'Revenue tracking and pattern analysis',
  },
  {
    id: 'gig-highlights',
    letter: 'G',
    name: 'Gig Highlights',
    subtitle: 'Your showstoppers!',
    icon: TrendingUp,
    letterColor: '#C9005C',
    gradient: 'entourage-g-gig-highlights',
    description: 'Pattern insights from your activity',
  },
  {
    id: 'excite',
    letter: 'E',
    name: 'Excite',
    subtitle: "Don't stop me now!",
    icon: Trophy,
    letterColor: '#FF008E',
    gradient: 'entourage-e-excite',
    description: 'Achievements and badges',
  },
];

export default function Entourage() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  useEffect(() => {
    generateSampleADHDData();
  }, []);

  const renderModuleContent = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return null;

    switch (moduleId) {
      case 'electrify':
        return <ElectrifyModule />;
      case 'new-releases':
        return <NewReleasesModule />;
      case 'tune-up':
        return <TuneUpModule />;
      case 'outro':
        return <OutroModule />;
      case 'unplugged':
        return <UnpluggedModule />;
      case 'retune':
        return <RetuneModule />;
      case 'amplify':
        return <AmplifyModule />;
      case 'gig-highlights':
        return <GigHighlightsModule />;
      case 'excite':
        return <ExciteModule />;
      default:
        return <div className="text-gray-400">Module coming soon...</div>;
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto py-6">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="header-gradient-entourage rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-supernova text-white tracking-tight">
                  ENTOURAGE
                </h1>
                <p className="text-base sm:text-lg font-arp-display text-white/80 mt-1">
                  Rewrite, reset & review
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Module Grid - 3x3 spelling E-N-T-O-U-R-A-G-E */}
        {!activeModule && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {modules.map((module) => {
                const Icon = module.icon;
                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`${module.gradient} p-4 sm:p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all group text-left`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-2xl sm:text-3xl font-supernova"
                        style={{ color: module.letterColor }}
                      >
                        {module.letter}
                      </span>
                      <Icon className="w-5 h-5 text-white/70" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                      {module.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60">
                      {module.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Tagline */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-gray-300 text-center font-josefin">
                Tools designed BY a variant brain - FOR variant brains! We're wired differently but that's not a flaw - it's a fucking advantage! Use these tools to help you get unstuck, clear your head, connect with others and rock the hell out of your business!
              </p>
            </div>
          </>
        )}

        {/* Active Module */}
        {activeModule && (
          <div>
            <button
              onClick={() => setActiveModule(null)}
              className="mb-4 text-magenta hover:text-white transition-colors font-semibold"
            >
              &larr; Back to Entourage
            </button>
            {renderModuleContent(activeModule)}
          </div>
        )}
      </div>
    </div>
  );
}

// Module Components
function ElectrifyModule() {
  const [task, setTask] = useState('');
  const [microSteps, setMicroSteps] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleBreakdown = () => {
    if (!task.trim()) return;
    setIsLoading(true);

    // Simulate AI breakdown
    setTimeout(() => {
      const steps = [
        `Open/prepare what you need for "${task}"`,
        `Set a 5-minute timer to just start`,
        `Do the smallest first step you can think of`,
        `Take a breath, then do the next tiny step`,
        `Celebrate the progress - you've started!`,
      ];
      setMicroSteps(steps);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-vivid-yellow-green/10 border border-vivid-yellow-green/30">
        <p className="text-vivid-yellow-green font-semibold">
          Stuck on a task? Let's break it into tiny, dopamine-friendly micro-steps!
        </p>
      </div>

      <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5">
        <h3 className="text-lg font-bold text-white mb-4">What are you avoiding?</h3>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="e.g., Clean the kitchen, Write that email..."
          className="w-full input-base mb-4"
        />
        <button
          onClick={handleBreakdown}
          disabled={!task.trim() || isLoading}
          className="btn-primary w-full sm:w-auto disabled:opacity-50"
        >
          {isLoading ? 'Breaking it down...' : 'Badass Bitesize It'}
        </button>
      </div>

      {microSteps.length > 0 && (
        <div className="p-6 rounded-xl border-2 border-magenta/30 bg-magenta/10">
          <h3 className="text-lg font-bold text-white mb-4">Your Micro-Steps:</h3>
          <ol className="space-y-3">
            {microSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-magenta text-black font-bold flex items-center justify-center text-sm flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-white">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function NewReleasesModule() {
  const [activeTab, setActiveTab] = useState<'dump' | 'ideas' | 'pivots'>('dump');
  const [dumpText, setDumpText] = useState('');
  const [timeLeft, setTimeLeft] = useState(300);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const startTimer = (seconds: number) => {
    setTimeLeft(seconds);
    setIsTimerActive(true);
  };

  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsTimerActive(false);
    }
  }, [isTimerActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2">
        {[
          { id: 'dump', label: 'DUMP', color: 'neon-cyan' },
          { id: 'ideas', label: 'IDEAS', color: 'magenta' },
          { id: 'pivots', label: 'PIVOTS', color: 'dark-grey-azure' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === tab.id
                ? `bg-${tab.color} text-black`
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
            style={activeTab === tab.id ? { backgroundColor: tab.color === 'neon-cyan' ? '#00F0E9' : tab.color === 'magenta' ? '#FF008E' : '#37454E' } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'dump' && (
        <div className="p-6 rounded-xl border-2 border-neon-cyan/30 bg-neon-cyan/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Brain Dump</h3>
            <div className="flex gap-2">
              {[2, 5, 10, 15].map((mins) => (
                <button
                  key={mins}
                  onClick={() => startTimer(mins * 60)}
                  className="px-3 py-1 rounded bg-white/10 text-white text-sm hover:bg-white/20"
                >
                  {mins}m
                </button>
              ))}
            </div>
          </div>

          {isTimerActive && (
            <div className="text-2xl font-bold text-neon-cyan mb-4 text-center">
              {formatTime(timeLeft)} - GO!
            </div>
          )}

          <textarea
            value={dumpText}
            onChange={(e) => setDumpText(e.target.value)}
            placeholder="Just start typing. Don't think, just dump everything out of your brain..."
            className="w-full h-48 input-base resize-none"
          />
        </div>
      )}

      {activeTab === 'ideas' && (
        <div className="p-6 rounded-xl border-2 border-magenta/30 bg-magenta/10">
          <h3 className="text-lg font-bold text-white mb-4">Capture an Idea</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Idea name" className="w-full input-base" />
            <textarea placeholder="What problem does it solve?" className="w-full h-24 input-base resize-none" />
            <input type="text" placeholder="Who's it for?" className="w-full input-base" />
          </div>
        </div>
      )}

      {activeTab === 'pivots' && (
        <div className="p-6 rounded-xl border-2 border-dark-grey-azure/50 bg-dark-grey-azure/30">
          <h3 className="text-lg font-bold text-white mb-4">Reflect on a Pivot</h3>
          <div className="space-y-4">
            <textarea placeholder="What I'm leaving behind..." className="w-full h-20 input-base resize-none" />
            <textarea placeholder="Where I'm heading..." className="w-full h-20 input-base resize-none" />
            <textarea placeholder="Why this is important..." className="w-full h-20 input-base resize-none" />
          </div>
        </div>
      )}
    </div>
  );
}

function TuneUpModule() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalSessions, setTotalSessions] = useState(0);
  const [todayMinutes, setTodayMinutes] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setIsRunning(false);
          setTotalSessions(prev => prev + 1);
          setTodayMinutes(prev => prev + 25);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-neon-cyan bg-neon-cyan/10 text-center">
          <p className="text-sm text-gray-400">Today's Minutes</p>
          <p className="text-2xl font-bold text-neon-cyan">{todayMinutes}</p>
        </div>
        <div className="p-4 rounded-xl border border-vivid-cyan bg-vivid-cyan/10 text-center">
          <p className="text-sm text-gray-400">Total Sessions</p>
          <p className="text-2xl font-bold text-vivid-cyan">{totalSessions}</p>
        </div>
      </div>

      {/* Timer */}
      <div className="p-8 rounded-xl border-2 border-magenta/30 bg-gradient-to-br from-magenta/10 to-vivid-pink/10 text-center">
        <div className={`text-6xl font-bold text-neon-cyan mb-6 ${isRunning ? 'focus-ring-pulse' : ''}`}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-8 py-3 rounded-full font-bold transition-all ${
              isRunning
                ? 'bg-vivid-cyan text-black'
                : 'bg-magenta text-white'
            }`}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setMinutes(25);
              setSeconds(0);
            }}
            className="px-8 py-3 rounded-full font-bold bg-vivid-pink text-white"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

function OutroModule() {
  const [thought, setThought] = useState('');
  const [reframe, setReframe] = useState('');

  const handleReframe = () => {
    if (!thought.trim()) return;
    // Simulate AI reframe
    const reframes = [
      `Instead of "${thought}", consider: This is an opportunity to learn and grow.`,
      `What if "${thought}" is actually preparing you for something better?`,
      `That thought is your brain trying to protect you. Thank it, then move forward anyway.`,
    ];
    setReframe(reframes[Math.floor(Math.random() * reframes.length)]);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5">
        <h3 className="text-lg font-bold text-white mb-4">What negative thought needs rewriting?</h3>
        <textarea
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          placeholder="e.g., I'll never finish this project on time..."
          className="w-full h-24 input-base resize-none mb-4"
        />
        <button onClick={handleReframe} className="btn-primary">
          Reframe It
        </button>
      </div>

      {reframe && (
        <div className="p-6 rounded-xl border-2 border-neon-cyan/30 bg-neon-cyan/10">
          <h3 className="text-lg font-bold text-white mb-2">New Perspective:</h3>
          <p className="text-white">{reframe}</p>
        </div>
      )}
    </div>
  );
}

function UnpluggedModule() {
  const doubles = [
    { name: 'JANIE', style: 'calm, steady, gentle', icon: '🌙' },
    { name: 'ANGIE', style: 'high energy, enthusiastic', icon: '⚡' },
    { name: 'IRIS', style: 'grounded, wise, patient', icon: '🌳' },
    { name: 'LOLA', style: 'competitive, motivator, focused', icon: '🔥' },
  ];

  const [selectedDouble, setSelectedDouble] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30">
        <p className="text-neon-cyan font-semibold text-center">
          Coming Soon - Double Up with other VENUED members
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {doubles.map((double) => (
          <button
            key={double.name}
            onClick={() => setSelectedDouble(double.name)}
            className={`p-6 rounded-xl border-2 transition-all text-left ${
              selectedDouble === double.name
                ? 'border-magenta bg-magenta/10'
                : 'border-white/10 bg-white/5 hover:border-white/30'
            }`}
          >
            <div className="text-3xl mb-2">{double.icon}</div>
            <h4 className="text-lg font-bold text-white">{double.name}</h4>
            <p className="text-sm text-gray-400">{double.style}</p>
          </button>
        ))}
      </div>

      {selectedDouble && (
        <div className="p-6 rounded-xl border-2 border-magenta/30 bg-magenta/10">
          <p className="text-white">Working alongside {selectedDouble}...</p>
          <button className="mt-4 btn-primary">NEED A BOOST?</button>
        </div>
      )}
    </div>
  );
}

function RetuneModule() {
  const resets = [
    { name: 'Just Chillin\'', color: '#00F0E9', description: 'Relax and decompress' },
    { name: 'Shaken Not Stirred', color: '#FF008E', description: 'Physical movement reset' },
    { name: 'And Breathe...', color: '#C9005C', description: 'Breathing exercises' },
    { name: 'Ground Rules', color: '#00A29D', description: '5-4-3-2-1 grounding' },
    { name: 'It\'s A Movement', color: '#D3FF2C', description: 'Dance it out!' },
  ];

  return (
    <div className="space-y-4">
      {resets.map((reset) => (
        <button
          key={reset.name}
          className="w-full p-4 rounded-xl border-2 border-white/10 bg-white/5 hover:border-white/30 transition-all text-left flex items-center justify-between"
        >
          <div>
            <h4 className="font-bold text-white" style={{ color: reset.color }}>{reset.name}</h4>
            <p className="text-sm text-gray-400">{reset.description}</p>
          </div>
          <span className="text-gray-400">Start &rarr;</span>
        </button>
      ))}

      <div className="p-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30">
        <p className="text-neon-cyan font-semibold text-center">
          Coming Soon: dAItani Dippers mini program
        </p>
      </div>
    </div>
  );
}

function AmplifyModule() {
  return (
    <div className="p-6 rounded-xl border-2 border-vivid-yellow-green/30 bg-vivid-yellow-green/10 text-center">
      <TrendingUp className="w-16 h-16 text-vivid-yellow-green mx-auto mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">Revenue Re-VENUED</h3>
      <p className="text-gray-400">Revenue tracking and AI insights coming soon!</p>
    </div>
  );
}

function GigHighlightsModule() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5 text-center">
        <TrendingUp className="w-16 h-16 text-vivid-pink mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Your Showstoppers</h3>
        <p className="text-gray-400">Keep using VENUED to unlock insights!</p>
        <p className="text-sm text-gray-500 mt-2">
          Track your productivity patterns, peak focus times, and task completion stats.
        </p>
      </div>
    </div>
  );
}

function ExciteModule() {
  const [achievementCount] = useState(0);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border-2 border-magenta/30 bg-magenta/10 text-center">
        <Trophy className="w-16 h-16 text-magenta mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Achievements</h3>
        <p className="text-4xl font-bold text-magenta">{achievementCount}</p>
        <p className="text-gray-400 mt-2">Start rocking tasks to unlock achievements!</p>
      </div>

      <div className="p-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30">
        <p className="text-neon-cyan font-semibold text-center">
          Coming Soon - Leaderboards, achievement sharing, and community challenges!
        </p>
      </div>

      {/* Achievement Categories */}
      <div className="flex flex-wrap gap-2">
        {['All', 'Unlocked', 'Focus', 'Fire'].map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
