'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  Star,
  Users,
  Calendar,
  Sparkles,
  Music,
  Menu,
  X,
  Home,
} from 'lucide-react';

const navItems = [
  { name: 'Backstage', href: '/backstage', icon: Star, mobileLabel: 'Backstage' },
  { name: 'Crew', href: '/crew', icon: Users, mobileLabel: 'Crew' },
  { name: 'Tour', href: '/tour', icon: Calendar, mobileLabel: 'Tour' },
  { name: 'Setlist', href: '/setlist', icon: Music, mobileLabel: 'Setlist' },
  { name: 'Entourage', href: '/entourage', icon: Sparkles, mobileLabel: 'Entourage' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if we're on home page
  const isHomePage = pathname === '/';

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-magenta/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image
                  src="/images/VENUED_Logo.png"
                  alt="VENUED"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-2xl font-supernova tracking-tighter text-white group-hover:text-magenta transition-colors duration-300">
                VENUED
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      relative flex items-center gap-2 px-3 py-2 text-sm font-semibold transition-all duration-300
                      ${isActive
                        ? 'text-magenta'
                        : 'text-white hover:text-magenta'
                      }
                      group
                    `}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'animate-pulse' : ''}`} />
                    {item.name}

                    {/* Active underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-magenta shadow-[0_0_8px_rgba(255,0,142,0.8)]" />
                    )}

                    {/* Hover glow effect */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm bg-magenta/10 rounded-md -z-10" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button - only show hamburger on tablet+ */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-magenta transition-colors p-2 mobile-touch-target"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay - solid dark background for readability */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-dark-grey-azure z-40">
            <div className="px-4 pt-4 pb-20 space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-4 rounded-lg text-lg font-semibold transition-all mobile-nav-item
                  ${isHomePage
                    ? 'text-magenta bg-magenta/10 border-2 border-magenta/30'
                    : 'text-white hover:text-magenta hover:bg-magenta/5 border-2 border-transparent'
                  }
                `}
              >
                <Home className="w-6 h-6" />
                Home
              </Link>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-4 rounded-lg text-lg font-semibold transition-all mobile-nav-item
                      ${isActive
                        ? 'text-magenta bg-magenta/10 border-2 border-magenta/30'
                        : 'text-white hover:text-magenta hover:bg-magenta/5 border-2 border-transparent'
                      }
                    `}
                  >
                    <Icon className="w-6 h-6" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation Bar - Only show on pages, not home */}
      {!isHomePage && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-dark-grey-azure/95 backdrop-blur-md border-t border-magenta/20 safe-area-inset-bottom">
          <div className="flex items-center justify-around h-16 px-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex flex-col items-center justify-center flex-1 py-2 px-1 transition-all mobile-touch-target
                    ${isActive
                      ? 'text-magenta'
                      : 'text-gray-400 hover:text-white'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 mb-1 ${isActive ? 'drop-shadow-[0_0_8px_rgba(255,0,142,0.8)]' : ''}`} />
                  <span className={`text-xs font-semibold ${isActive ? 'text-magenta' : ''}`}>
                    {item.mobileLabel}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 w-12 h-0.5 bg-magenta rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      )}

      {/* Spacer for bottom nav on mobile (when not on home) */}
      {!isHomePage && <div className="md:hidden h-16" />}
    </>
  );
}
