import { Button } from './ui/button';
import { Send, Sparkles } from 'lucide-react';

export function Hero() {
  const handleTelegramRedirect = () => {
    // Replace with your actual Telegram bot link
    window.open('https://t.me/databridgerobot', '_blank');
  };

  return (
    <section id="hero" className="relative overflow-hidden px-6 py-24 md:py-36 bg-white pt-32">
      {/* MTN Yellow accent bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
      
      {/* Elegant pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Glow effects with MTN yellow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 border border-yellow-600 rounded-full mb-8 shadow-lg">
          <Sparkles className="w-4 h-4 text-slate-900" />
          <span className="text-sm font-bold text-slate-900">DATABRIDGE PARTNER PROGRAM</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-slate-900 leading-tight">
          DataBridge
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 mt-2">
            Partner Bot
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-700 mb-6 max-w-3xl mx-auto leading-relaxed">
          Transform your unused MTN SIM cards into a source of 
          <span className="font-bold text-yellow-600"> monthly free data</span>
        </p>

        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Receive 15GB of complimentary data every month while supporting our growing network. 
          Elegant, automated, and mutually beneficial.
        </p>

        <Button 
          onClick={handleTelegramRedirect}
          size="lg"
          className="bg-yellow-500 text-slate-900 hover:bg-yellow-600 px-10 py-7 text-lg h-auto shadow-2xl shadow-yellow-500/30 rounded-full font-bold transition-all duration-300 hover:scale-105"
        >
          <Send className="w-5 h-5 mr-3" />
          Begin Your Journey
        </Button>

        <p className="text-sm text-slate-500 mt-8">
          Join our community of MTN partners across Nigeria
        </p>
      </div>
    </section>
  );
}