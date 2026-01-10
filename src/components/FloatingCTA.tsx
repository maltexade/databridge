import { useState, useEffect } from 'react';
import { Send, X } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px down
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleClick = () => {
    window.open('https://t.me/databridgerobot', '_blank');
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="relative group">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-slate-700"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Main CTA button */}
        <button
          onClick={handleClick}
          className="bg-yellow-500 text-slate-900 px-6 py-4 rounded-full shadow-2xl hover:bg-yellow-600 transition-all duration-300 hover:scale-105 flex items-center gap-3 font-bold group"
        >
          <div className="relative">
            <Send className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </div>
          <span className="hidden sm:inline">Start Earning Free Data</span>
          <span className="sm:hidden">Get Started</span>
        </button>
      </div>
    </div>
  );
}
