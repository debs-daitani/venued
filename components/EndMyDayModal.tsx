'use client';

import { X, Moon, Star, CheckCircle2 } from 'lucide-react';

interface EndMyDayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EndMyDayModal({ isOpen, onClose }: EndMyDayModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-dark-grey-azure rounded-2xl border border-dark-cyan/30 max-w-md w-full p-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-dark-cyan/20">
              <Moon className="w-6 h-6 text-dark-cyan" />
            </div>
            <h2 className="text-2xl font-supernova text-white">End My Day</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Placeholder Content */}
        <div className="text-center py-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-cyan/20 flex items-center justify-center">
            <Moon className="w-10 h-10 text-dark-cyan" />
          </div>

          <h3 className="text-xl font-bold text-white mb-3">Coming Soon!</h3>
          <p className="text-gray-400 mb-6 font-josefin">
            Your daily wrap-up ritual is being crafted. This will help you:
          </p>

          <div className="space-y-3 text-left max-w-xs mx-auto mb-8">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
              <CheckCircle2 className="w-5 h-5 text-dark-cyan flex-shrink-0" />
              <span className="text-white text-sm">Review what you accomplished today</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
              <Star className="w-5 h-5 text-dark-cyan flex-shrink-0" />
              <span className="text-white text-sm">Celebrate your wins, big and small</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
              <Moon className="w-5 h-5 text-dark-cyan flex-shrink-0" />
              <span className="text-white text-sm">Set intentions for tomorrow</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-dark-cyan text-white font-bold hover:bg-dark-cyan/80 transition-all"
        >
          Got It
        </button>
      </div>
    </div>
  );
}
