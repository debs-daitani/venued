'use client';

import { useState, useEffect } from 'react';
import { Star, Plus, CheckCircle2, Rocket, ListChecks, Clock, FileEdit } from 'lucide-react';
import Link from 'next/link';
import { Project, ProjectStatus } from '@/lib/types';
import { getProjects, calculateStats, initializeSampleData } from '@/lib/storage';
import { getCrewTasks } from '@/lib/crew';
import BackstageStats from '@/components/backstage/BackstageStats';
import ProjectCard from '@/components/backstage/ProjectCard';
import EmptyState from '@/components/backstage/EmptyState';

export default function Backstage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<ProjectStatus | 'all'>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [upcomingTasks, setUpcomingTasks] = useState<any[]>([]);

  useEffect(() => {
    // Initialize sample data if no projects exist
    initializeSampleData();

    // Load projects
    const loadedProjects = getProjects();
    setProjects(loadedProjects);

    // Load upcoming tasks
    const tasks = getCrewTasks();
    const today = new Date().toISOString().split('T')[0];
    const upcoming = tasks
      .filter(t => !t.completed && t.scheduledDate && t.scheduledDate >= today)
      .sort((a, b) => {
        const dateA = a.scheduledDate || '';
        const dateB = b.scheduledDate || '';
        return dateA.localeCompare(dateB);
      })
      .slice(0, 3);
    setUpcomingTasks(upcoming);

    setIsLoading(false);
  }, []);

  const stats = calculateStats();

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.status === activeFilter;
  });

  // Calculate filter counts
  const filterCounts = {
    all: projects.length,
    planning: projects.filter((p) => p.status === 'planning').length,
    live: projects.filter((p) => p.status === 'live').length,
    complete: projects.filter((p) => p.status === 'complete').length,
  };

  const handleProjectClick = (projectId: string) => {
    console.log('Project clicked:', projectId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-magenta border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400 font-josefin">Loading your shows...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto py-6 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="rounded-2xl p-6 sm:p-8 mb-6 bg-white/5 border border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 text-magenta" />
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-supernova tracking-tight bg-gradient-to-r from-magenta to-dark-grey-azure bg-clip-text text-transparent">
                    BACKSTAGE
                  </h1>
                  <p className="text-base sm:text-lg font-arp-display text-white/80 mt-1">
                    Your project command centre
                  </p>
                </div>
              </div>
              <Link
                href="/crew"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 py-3 bg-neon-cyan text-black font-bold rounded-full hover:bg-magenta transition-all duration-300 shadow-[0_0_20px_rgba(0,240,233,0.4)] hover:shadow-[0_0_30px_rgba(255,0,142,0.6)]"
              >
                <Plus className="w-5 h-5" />
                New Show
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid - 2x2 on mobile, clickable status filters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`p-4 sm:p-6 rounded-xl border-2 transition-all text-left ${
              activeFilter === 'all'
                ? 'border-magenta bg-magenta/10'
                : 'border-white/10 bg-white/5 hover:border-magenta/40'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <ListChecks className="w-5 h-5 text-magenta" />
              <span className="text-sm font-semibold text-gray-400">All Shows</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white">{filterCounts.all}</p>
          </button>

          <button
            onClick={() => setActiveFilter('planning')}
            className={`p-4 sm:p-6 rounded-xl border-2 transition-all text-left ${
              activeFilter === 'planning'
                ? 'border-azure bg-azure/10'
                : 'border-white/10 bg-white/5 hover:border-azure/40'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <FileEdit className="w-5 h-5 text-azure" />
              <span className="text-sm font-semibold text-gray-400">Planning</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white">{filterCounts.planning}</p>
          </button>

          <button
            onClick={() => setActiveFilter('live')}
            className={`p-4 sm:p-6 rounded-xl border-2 transition-all text-left ${
              activeFilter === 'live'
                ? 'border-neon-cyan bg-neon-cyan/10'
                : 'border-white/10 bg-white/5 hover:border-neon-cyan/40'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-5 h-5 text-neon-cyan" />
              <span className="text-sm font-semibold text-gray-400">Live</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white">{filterCounts.live}</p>
          </button>

          <button
            onClick={() => setActiveFilter('complete')}
            className={`p-4 sm:p-6 rounded-xl border-2 transition-all text-left ${
              activeFilter === 'complete'
                ? 'border-vivid-yellow-green bg-vivid-yellow-green/10'
                : 'border-white/10 bg-white/5 hover:border-vivid-yellow-green/40'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-vivid-yellow-green" />
              <span className="text-sm font-semibold text-gray-400">Completed</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white">{filterCounts.complete}</p>
          </button>
        </div>

        {/* Upcoming Tasks Section */}
        {upcomingTasks.length > 0 && (
          <div className="mb-8 p-4 sm:p-6 rounded-xl border-2 border-vivid-cyan/30 bg-vivid-cyan/10">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-vivid-cyan" />
              <h3 className="text-lg font-semibold text-white">Upcoming Tasks</h3>
            </div>
            <div className="space-y-2">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/10"
                >
                  <div>
                    <p className="font-semibold text-white">{task.title}</p>
                    <p className="text-sm text-gray-400">
                      {task.scheduledDate ? new Date(task.scheduledDate).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                      }) : 'No date'}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    task.energyLevel === 'high' ? 'bg-vivid-yellow-green/20 text-vivid-yellow-green' :
                    task.energyLevel === 'medium' ? 'bg-magenta/20 text-magenta' :
                    'bg-vivid-cyan/20 text-vivid-cyan'
                  }`}>
                    {task.energyLevel}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/crew"
              className="mt-4 inline-flex items-center gap-2 text-vivid-cyan hover:text-white transition-colors text-sm font-semibold"
            >
              View all tasks &rarr;
            </Link>
          </div>
        )}

        {/* Empty state for upcoming tasks */}
        {upcomingTasks.length === 0 && (
          <div className="mb-8 p-4 sm:p-6 rounded-xl border-2 border-white/10 bg-white/5 text-center">
            <Clock className="w-8 h-8 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-400 font-josefin">All up to date - no upcoming tasks!</p>
          </div>
        )}

        {/* Projects Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <EmptyState filter={activeFilter} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
