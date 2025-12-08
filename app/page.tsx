'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Book, Sparkles } from 'lucide-react';
import { generateDemoData, isDemoDataLoaded } from '@/lib/demoData';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [demoLoaded, setDemoLoaded] = useState(false);
  const [showUserGuide, setShowUserGuide] = useState(false);

  useEffect(() => {
    setDemoLoaded(isDemoDataLoaded());
  }, []);

  const handleRehearsalStudio = () => {
    generateDemoData();
    setDemoLoaded(true);
    router.push('/backstage');
  };

  const handleJamSession = () => {
    // Clear any existing demo data and start fresh
    if (typeof window !== 'undefined') {
      localStorage.removeItem('venued_projects');
      localStorage.removeItem('venued_crew_tasks');
      localStorage.removeItem('venued_sample_data_loaded');
    }
    router.push('/backstage');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo - bigger size, no text below */}
          <div className="mb-4 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <Image
                src="/images/VENUED_Logo.png"
                alt="VENUED"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(255,0,142,0.6)]"
                priority
              />
            </div>
          </div>

          {/* Tagline - single line on all screens */}
          <p className="text-lg sm:text-xl md:text-2xl font-arp-display text-magenta mb-4 tracking-wide whitespace-nowrap">
            Get VENUED | Get it DONE!
          </p>

          {/* Sub-tagline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-josefin">
            Strategic project planning for VARIANT brains who build like rockstars
          </p>

          {/* CTA Buttons - Jam Session PRIMARY (top), Rehearsal Studio secondary */}
          <div className="flex flex-col gap-4 justify-center items-center max-w-md mx-auto">
            {/* Jam Session Button - PRIMARY */}
            <button
              onClick={handleJamSession}
              className="w-full group flex flex-col items-center gap-1 px-8 py-5 text-lg font-bold text-black bg-magenta rounded-2xl hover:bg-neon-cyan transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(255,0,142,0.5)] hover:shadow-[0_0_50px_rgba(0,240,233,0.8)]"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                JAM SESSION
              </span>
              <span className="text-sm font-normal opacity-80">
                Your lyrics your way
              </span>
            </button>

            {/* Rehearsal Studio Button - Secondary */}
            <button
              onClick={handleRehearsalStudio}
              className="w-full group flex flex-col items-center gap-1 px-8 py-5 text-lg font-bold text-white bg-white/10 rounded-2xl hover:bg-white/20 transition-all border-2 border-white/20 hover:border-magenta/40"
            >
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                REHEARSAL STUDIO
              </span>
              <span className="text-sm font-normal opacity-80">
                Play with samples
              </span>
            </button>
          </div>

          {/* User Guide Link */}
          <button
            onClick={() => setShowUserGuide(true)}
            className="mt-8 inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors font-semibold"
          >
            <Book className="w-5 h-5" />
            User Guide
          </button>

          {/* SUPERNova Coming Soon */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-vivid-pink/20 to-magenta/20 border border-magenta/30 backdrop-blur-sm max-w-lg mx-auto">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-supernova text-transparent bg-clip-text bg-gradient-to-r from-magenta to-neon-cyan mb-2">
                SUPERNova AI
              </h3>
              <p className="text-gray-300 font-josefin mb-3">
                Your bold, direct, anti-BS coaching assistant
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-dark-grey-azure/80 rounded-full border border-neon-cyan/30">
                <Sparkles className="w-4 h-4 text-neon-cyan animate-pulse" />
                <span className="text-neon-cyan font-semibold">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Guide Modal */}
      {showUserGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-dark-grey-azure rounded-2xl border border-magenta/30 max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-supernova text-white">User Guide</h2>
              <button
                onClick={() => setShowUserGuide(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <span className="text-2xl text-gray-400 hover:text-white">&times;</span>
              </button>
            </div>

            <div className="space-y-6 text-gray-300 font-josefin">
              <section>
                <h3 className="text-lg font-semibold text-magenta mb-2">What is VENUED?</h3>
                <p>
                  VENUED is a strategic project planning app designed specifically for VARIANT brains.
                  We understand that your brain works differently - and that's not a flaw, it's an advantage!
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-neon-cyan mb-2">The 5 Sections</h3>
                <ul className="space-y-2">
                  <li><strong className="text-white">Backstage</strong> - Your project command centre. See all your projects at a glance.</li>
                  <li><strong className="text-white">Crew</strong> - Your daily task planning hub. Match tasks to your energy levels.</li>
                  <li><strong className="text-white">Tour</strong> - Your strategic timeline. Plan your week with VARIANT reality buffers.</li>
                  <li><strong className="text-white">Setlist</strong> - Your hype station. Music, energy tracking, and motivation boosts.</li>
                  <li><strong className="text-white">Entourage</strong> - 9 support tools designed BY a VARIANT brain FOR VARIANT brains.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-vivid-yellow-green mb-2">Getting Started</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Rehearsal Studio</strong> - Try the app with sample projects and tasks</li>
                  <li><strong>Jam Session</strong> - Start fresh with your own projects</li>
                  <li>Use the bottom navigation to move between sections</li>
                  <li>Check out the Entourage for tools to help you stay focused and motivated</li>
                </ol>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-vivid-pink mb-2">Pro Tips</h3>
                <ul className="space-y-2">
                  <li>Times shown include a 1.8x VARIANT reality buffer - trust them!</li>
                  <li>Match tasks to your current energy level for better flow</li>
                  <li>Use "FUCK IT - DO IT" mode when you're stuck in analysis paralysis</li>
                  <li>Check the Entourage tools when you need support</li>
                </ul>
              </section>
            </div>

            <button
              onClick={() => setShowUserGuide(false)}
              className="mt-6 w-full py-4 bg-magenta text-black font-bold rounded-xl hover:bg-neon-cyan transition-all shadow-[0_0_20px_rgba(255,0,142,0.5)] hover:shadow-[0_0_30px_rgba(0,240,233,0.6)]"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-4 text-center">
        <p className="text-sm text-gray-500 font-josefin">
          Built for VARIANT brains, by VARIANT brains.
        </p>
      </div>
    </div>
  );
}
