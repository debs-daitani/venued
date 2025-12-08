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
  Brain,
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
              <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-supernova text-white tracking-tight">
                  ENTOURAGE
                </h1>
                <p className="text-base sm:text-lg font-arp-display text-white/80 mt-1">
                  9 'groupies' who've always got your back!
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
                    className="relative p-4 sm:p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all group text-left bg-white/5 overflow-hidden"
                  >
                    {/* Bottom gradient highlight */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 opacity-80"
                      style={{ backgroundColor: module.letterColor }}
                    />
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
                    <p className="text-xs sm:text-sm text-white/60 font-josefin">
                      {module.subtitle}
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
        {activeModule && (() => {
          const module = modules.find(m => m.id === activeModule);
          const Icon = module?.icon || Brain;
          return (
            <div>
              <button
                onClick={() => setActiveModule(null)}
                className="mb-4 text-magenta hover:text-white transition-colors font-semibold"
              >
                &larr; Back to Entourage
              </button>

              {/* Module-specific header */}
              <div
                className="rounded-2xl p-6 sm:p-8 mb-6"
                style={{
                  background: `linear-gradient(135deg, ${module?.letterColor}30 0%, transparent 100%)`,
                  borderColor: `${module?.letterColor}50`,
                  borderWidth: '2px',
                  borderStyle: 'solid'
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-4xl sm:text-5xl font-supernova"
                    style={{ color: module?.letterColor }}
                  >
                    {module?.letter}
                  </span>
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: module?.letterColor }} />
                  <div>
                    <h2
                      className="text-2xl sm:text-3xl font-supernova tracking-tight"
                      style={{ color: module?.letterColor }}
                    >
                      {module?.name}
                    </h2>
                    <p className="text-base font-arp-display text-white/80 mt-1">
                      {module?.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {renderModuleContent(activeModule)}
            </div>
          );
        })()}
      </div>
    </div>
  );
}

// Module Components
function ElectrifyModule() {
  const [task, setTask] = useState('');
  const [whyStuck, setWhyStuck] = useState('');
  const [microSteps, setMicroSteps] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleBreakdown = () => {
    if (!task.trim()) return;
    setIsLoading(true);

    // Intelligent AI breakdown based on task and why stuck
    setTimeout(() => {
      let steps: string[] = [];

      // Customize steps based on why they're stuck
      const lowerWhyStuck = whyStuck.toLowerCase();

      if (lowerWhyStuck.includes('overwhelm') || lowerWhyStuck.includes('too big') || lowerWhyStuck.includes('too much')) {
        steps = [
          `Take a deep breath. "${task}" feels huge but we're gonna chunk it.`,
          `Write down just 3 parts of this task on paper - nothing more`,
          `Pick the TINIEST part. Like, embarrassingly tiny.`,
          `Set a 5-minute timer. Only work on that tiny part.`,
          `Done? Celebrate! If not, that's OK - you STARTED. That's the win.`,
        ];
      } else if (lowerWhyStuck.includes('boring') || lowerWhyStuck.includes('don\'t want') || lowerWhyStuck.includes('hate')) {
        steps = [
          `Put on your favorite pump-up song - seriously, do it now!`,
          `Set a 10-minute timer. You can do ANYTHING for 10 minutes.`,
          `Start "${task}" with the most interesting part first`,
          `Reward yourself after - what treat are you earning?`,
          `Remind yourself: boring tasks don't define you, completing them does! 🤘`,
        ];
      } else if (lowerWhyStuck.includes('perfect') || lowerWhyStuck.includes('scared') || lowerWhyStuck.includes('afraid') || lowerWhyStuck.includes('fail')) {
        steps = [
          `Permission granted: Your first attempt can be TERRIBLE. Seriously.`,
          `Write "DRAFT" or "V1" on top - this removes perfectionism pressure`,
          `Set a timer for 15 mins. Whatever you produce is the goal.`,
          `Start in the middle if the beginning feels scary`,
          `Remember: Done > Perfect. Ship the damn thing! 🚀`,
        ];
      } else if (lowerWhyStuck.includes('distract') || lowerWhyStuck.includes('focus') || lowerWhyStuck.includes('phone')) {
        steps = [
          `Put your phone in another room. Yes, really. Go do it.`,
          `Close all browser tabs except what you need for "${task}"`,
          `Write your intention on a sticky note: "I am doing ${task}"`,
          `Set a 25-minute Pomodoro timer - head to Tune Up module!`,
          `When distracted, look at the sticky note. Return to task.`,
        ];
      } else {
        steps = [
          `Open/prepare what you need for "${task}"`,
          `Set a 5-minute timer - commit to just starting`,
          `What's the FIRST physical action? Do that one thing.`,
          `Take a breath. Now do the next tiny step.`,
          `You've started! The hardest part is over. Keep that momentum! 🤘`,
        ];
      }

      setMicroSteps(steps);
      setIsLoading(false);
    }, 1500);
  };

  const handleCancel = () => {
    setTask('');
    setWhyStuck('');
    setMicroSteps([]);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-magenta/10 border border-magenta/30">
        <p className="text-magenta font-semibold">
          🤘 Stuck on a task? Let's break it into tiny, dopamine-friendly micro-steps!
        </p>
      </div>

      <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5">
        <h3 className="text-lg font-bold text-white mb-4">What are you avoiding?</h3>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="e.g., Clean the kitchen, Write that email, Start the presentation..."
          className="w-full px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-magenta focus:outline-none mb-4"
        />

        <h3 className="text-lg font-bold text-white mb-4">Why are you stuck? (optional but helps!)</h3>
        <input
          type="text"
          value={whyStuck}
          onChange={(e) => setWhyStuck(e.target.value)}
          placeholder="e.g., It's too big, I'm scared of failing, It's boring, I keep getting distracted..."
          className="w-full px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-magenta focus:outline-none mb-4"
        />

        <div className="flex gap-3">
          <button
            onClick={handleBreakdown}
            disabled={!task.trim() || isLoading}
            className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-magenta to-neon-cyan text-black font-bold hover:shadow-[0_0_30px_rgba(255,0,142,0.5)] transition-all disabled:opacity-50"
          >
            {isLoading ? 'Breaking it down...' : '🤘 LFG!'}
          </button>
          {(task || whyStuck || microSteps.length > 0) && (
            <button
              onClick={handleCancel}
              className="px-6 py-3 rounded-xl border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {microSteps.length > 0 && (
        <div className="p-6 rounded-xl border-2 border-magenta/30 bg-magenta/10">
          <h3 className="text-lg font-bold text-white mb-4">Your Badass Micro-Steps:</h3>
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
  const [dumpSaved, setDumpSaved] = useState(false);
  const [aiInsight, setAiInsight] = useState('');
  const [ideaName, setIdeaName] = useState('');
  const [ideaProblem, setIdeaProblem] = useState('');
  const [ideaAudience, setIdeaAudience] = useState('');
  const [ideaSaved, setIdeaSaved] = useState(false);
  const [pivotLeaving, setPivotLeaving] = useState('');
  const [pivotHeading, setPivotHeading] = useState('');
  const [pivotWhy, setPivotWhy] = useState('');
  const [pivotSaved, setPivotSaved] = useState(false);

  const startTimer = (seconds: number) => {
    setTimeLeft(seconds);
    setIsTimerActive(true);
    setDumpSaved(false);
    setAiInsight('');
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

  const handleSaveDump = () => {
    if (!dumpText.trim()) return;

    // Save to localStorage
    const dumps = JSON.parse(localStorage.getItem('venued_brain_dumps') || '[]');
    dumps.unshift({
      id: Date.now().toString(),
      content: dumpText,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('venued_brain_dumps', JSON.stringify(dumps.slice(0, 50)));
    setDumpSaved(true);

    // Generate AI insight based on dump content
    setTimeout(() => {
      const wordCount = dumpText.split(/\s+/).length;
      const hasQuestions = dumpText.includes('?');
      const mentionsWork = dumpText.toLowerCase().includes('work') || dumpText.toLowerCase().includes('project');
      const mentionsStress = dumpText.toLowerCase().includes('stress') || dumpText.toLowerCase().includes('overwhelm') || dumpText.toLowerCase().includes('anxious');

      let insight = '';
      if (wordCount > 100) {
        insight = "🧠 Wow, you had a LOT on your mind! That's the beauty of brain dumps - getting it OUT of your head creates space for clarity. Notice any patterns in what came out?";
      } else if (hasQuestions) {
        insight = "💡 I noticed some questions in there. Those questions are often your subconscious pointing you toward what matters. Which question feels most urgent to answer?";
      } else if (mentionsStress) {
        insight = "🤘 Sounds like you're carrying some weight. Remember: acknowledging stress is the first step to releasing it. What's ONE small thing you could let go of today?";
      } else if (mentionsWork) {
        insight = "📋 Looks like work is on your mind. Consider: which ONE thing from this dump, if completed, would make everything else easier or unnecessary?";
      } else {
        insight = "✨ Great job getting that out of your head! Now your brain has more bandwidth. What's the ONE action you want to take based on this dump?";
      }
      setAiInsight(insight);
    }, 500);
  };

  const handleSaveIdea = () => {
    if (!ideaName.trim()) return;

    const ideas = JSON.parse(localStorage.getItem('venued_ideas') || '[]');
    ideas.unshift({
      id: Date.now().toString(),
      name: ideaName,
      problem: ideaProblem,
      audience: ideaAudience,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('venued_ideas', JSON.stringify(ideas.slice(0, 50)));
    setIdeaSaved(true);
    setTimeout(() => {
      setIdeaName('');
      setIdeaProblem('');
      setIdeaAudience('');
      setIdeaSaved(false);
    }, 2000);
  };

  const handleSavePivot = () => {
    if (!pivotLeaving.trim() && !pivotHeading.trim()) return;

    const pivots = JSON.parse(localStorage.getItem('venued_pivots') || '[]');
    pivots.unshift({
      id: Date.now().toString(),
      leaving: pivotLeaving,
      heading: pivotHeading,
      why: pivotWhy,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('venued_pivots', JSON.stringify(pivots.slice(0, 50)));
    setPivotSaved(true);
    setTimeout(() => {
      setPivotLeaving('');
      setPivotHeading('');
      setPivotWhy('');
      setPivotSaved(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2">
        {[
          { id: 'dump', label: 'DUMP', color: '#00F0E9' },
          { id: 'ideas', label: 'IDEAS', color: '#FF008E' },
          { id: 'pivots', label: 'PIVOTS', color: '#37454E' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === tab.id
                ? 'text-black'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
            style={activeTab === tab.id ? { backgroundColor: tab.color } : {}}
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
            className="w-full h-48 px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none resize-none mb-4"
          />

          <button
            onClick={handleSaveDump}
            disabled={!dumpText.trim()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neon-cyan text-black font-bold hover:bg-white transition-all disabled:opacity-50"
          >
            {dumpSaved ? '✓ Saved!' : '💾 Save Dump'}
          </button>

          {aiInsight && (
            <div className="mt-4 p-4 rounded-lg bg-black/30 border border-neon-cyan/30">
              <p className="text-sm font-semibold text-neon-cyan mb-2">AI Insight:</p>
              <p className="text-white">{aiInsight}</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'ideas' && (
        <div className="p-6 rounded-xl border-2 border-magenta/30 bg-magenta/10">
          <h3 className="text-lg font-bold text-white mb-4">Capture an Idea</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={ideaName}
              onChange={(e) => setIdeaName(e.target.value)}
              placeholder="Idea name"
              className="w-full px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-magenta focus:outline-none"
            />
            <textarea
              value={ideaProblem}
              onChange={(e) => setIdeaProblem(e.target.value)}
              placeholder="What problem does it solve?"
              className="w-full h-24 px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-magenta focus:outline-none resize-none"
            />
            <input
              type="text"
              value={ideaAudience}
              onChange={(e) => setIdeaAudience(e.target.value)}
              placeholder="Who's it for?"
              className="w-full px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-magenta focus:outline-none"
            />
            <button
              onClick={handleSaveIdea}
              disabled={!ideaName.trim()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-magenta text-black font-bold hover:bg-white transition-all disabled:opacity-50"
            >
              {ideaSaved ? '✓ Saved!' : '💾 Save Idea'}
            </button>
          </div>
        </div>
      )}

      {activeTab === 'pivots' && (
        <div className="p-6 rounded-xl border-2 border-white/30 bg-dark-grey-azure/30">
          <h3 className="text-lg font-bold text-white mb-4">Reflect on a Pivot</h3>
          <div className="space-y-4">
            <textarea
              value={pivotLeaving}
              onChange={(e) => setPivotLeaving(e.target.value)}
              placeholder="What I'm leaving behind..."
              className="w-full h-20 px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-white/50 focus:outline-none resize-none"
            />
            <textarea
              value={pivotHeading}
              onChange={(e) => setPivotHeading(e.target.value)}
              placeholder="Where I'm heading..."
              className="w-full h-20 px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-white/50 focus:outline-none resize-none"
            />
            <textarea
              value={pivotWhy}
              onChange={(e) => setPivotWhy(e.target.value)}
              placeholder="Why this is important..."
              className="w-full h-20 px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-white/50 focus:outline-none resize-none"
            />
            <button
              onClick={handleSavePivot}
              disabled={!pivotLeaving.trim() && !pivotHeading.trim()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all disabled:opacity-50"
            >
              {pivotSaved ? '✓ Saved!' : '💾 Save Pivot'}
            </button>
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
  const [selectedDuration, setSelectedDuration] = useState(25);
  const [taskName, setTaskName] = useState('');
  const [sessionComplete, setSessionComplete] = useState(false);
  const [recentSessions, setRecentSessions] = useState<any[]>([]);

  // Load saved data
  useEffect(() => {
    const sessions = JSON.parse(localStorage.getItem('venued_focus_sessions') || '[]');
    setRecentSessions(sessions.slice(0, 5));

    // Calculate today's stats
    const today = new Date().toISOString().split('T')[0];
    const todaySessions = sessions.filter((s: any) => s.date === today);
    setTodayMinutes(todaySessions.reduce((sum: number, s: any) => sum + s.duration, 0));
    setTotalSessions(sessions.length);
  }, []);

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
          // Session complete!
          setIsRunning(false);
          setSessionComplete(true);

          // Log the session
          const sessions = JSON.parse(localStorage.getItem('venued_focus_sessions') || '[]');
          sessions.unshift({
            id: Date.now().toString(),
            taskName: taskName || 'Focus Session',
            duration: selectedDuration,
            date: new Date().toISOString().split('T')[0],
            timestamp: new Date().toISOString(),
          });
          localStorage.setItem('venued_focus_sessions', JSON.stringify(sessions.slice(0, 100)));

          setTotalSessions(prev => prev + 1);
          setTodayMinutes(prev => prev + selectedDuration);
          setRecentSessions(sessions.slice(0, 5));
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, selectedDuration, taskName]);

  const handleStart = () => {
    setSessionComplete(false);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMinutes(selectedDuration);
    setSeconds(0);
    setSessionComplete(false);
  };

  const handleDurationChange = (mins: number) => {
    setSelectedDuration(mins);
    if (!isRunning) {
      setMinutes(mins);
      setSeconds(0);
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-magenta bg-magenta/10 text-center">
          <p className="text-xs text-gray-400">Today</p>
          <p className="text-xl font-bold text-magenta">{todayMinutes}m</p>
        </div>
        <div className="p-4 rounded-xl border border-neon-cyan bg-neon-cyan/10 text-center">
          <p className="text-xs text-gray-400">Sessions</p>
          <p className="text-xl font-bold text-neon-cyan">{totalSessions}</p>
        </div>
        <div className="p-4 rounded-xl border border-vivid-yellow-green bg-vivid-yellow-green/10 text-center">
          <p className="text-xs text-gray-400">Streak</p>
          <p className="text-xl font-bold text-vivid-yellow-green">🤘</p>
        </div>
      </div>

      {/* Task Input */}
      <div className="p-4 rounded-xl border-2 border-white/10 bg-white/5">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="What are you focusing on? (optional)"
          className="w-full px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-magenta focus:outline-none"
          disabled={isRunning}
        />
      </div>

      {/* Duration Presets */}
      <div className="flex justify-center gap-2 flex-wrap">
        {[5, 15, 25, 45, 60].map((mins) => (
          <button
            key={mins}
            onClick={() => handleDurationChange(mins)}
            disabled={isRunning}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedDuration === mins
                ? 'bg-magenta text-black'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            } disabled:opacity-50`}
          >
            {mins}m
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <div className="p-8 rounded-xl border-2 border-magenta/30 bg-gradient-to-br from-magenta/10 to-neon-cyan/10 text-center">
        <div className={`text-7xl font-supernova text-white mb-6 ${isRunning ? 'animate-pulse' : ''}`}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>

        {sessionComplete && (
          <div className="mb-6 p-4 rounded-lg bg-vivid-yellow-green/20 border border-vivid-yellow-green/50">
            <p className="text-vivid-yellow-green font-bold text-lg">🤘 Session Complete!</p>
            <p className="text-white text-sm">You focused for {selectedDuration} minutes. Great work!</p>
          </div>
        )}

        <div className="flex justify-center gap-4">
          {!isRunning ? (
            <button
              onClick={handleStart}
              className="px-10 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-magenta to-neon-cyan text-black hover:shadow-[0_0_40px_rgba(255,0,142,0.6)] transition-all"
            >
              {sessionComplete ? '🤘 Go Again!' : '▶ Start Focus'}
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsRunning(false)}
                className="px-8 py-4 rounded-full font-bold bg-neon-cyan text-black hover:bg-white transition-all"
              >
                ⏸ Pause
              </button>
              <button
                onClick={handleReset}
                className="px-8 py-4 rounded-full font-bold bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                ⏹ Stop
              </button>
            </>
          )}
        </div>
      </div>

      {/* Recent Sessions */}
      {recentSessions.length > 0 && (
        <div className="p-4 rounded-xl border-2 border-white/10 bg-white/5">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Recent Sessions</h3>
          <div className="space-y-2">
            {recentSessions.map((session: any) => (
              <div key={session.id} className="flex items-center justify-between p-2 rounded-lg bg-black/30">
                <span className="text-white text-sm">{session.taskName}</span>
                <div className="flex items-center gap-2">
                  <span className="text-magenta font-semibold">{session.duration}m</span>
                  <span className="text-xs text-gray-500">
                    {new Date(session.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
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
    { name: 'LOLA', style: 'competitive, motivator, focused', icon: '🤘' },
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
        {['All', 'Unlocked', 'Focus', 'Rock'].map((filter) => (
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
