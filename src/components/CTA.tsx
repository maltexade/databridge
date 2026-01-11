import { Button } from "./ui/button";
import { Send, ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  const handleTelegramRedirect = () => {
    // Replace with your actual Telegram bot link
    window.open("https://t.me/databridgerobot", "_blank");
  };

  return (
    <section className="relative px-6 py-28 overflow-hidden bg-white">
      {/* MTN Yellow accent bars */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 border border-yellow-600 rounded-full mb-8 shadow-lg">
          <Sparkles className="w-4 h-4 text-slate-900" />
          <span className="text-sm font-bold text-slate-900">
            START YOUR DATABRIDGE PARTNERSHIP TODAY
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Ready to Begin Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 mt-2">
            Free Data Journey?
          </span>
        </h2>

        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Connect with our Telegram bot to register or access
          your existing MTN partner account
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button
            onClick={handleTelegramRedirect}
            size="lg"
            className="bg-yellow-500 text-slate-900 hover:bg-yellow-600 px-10 py-7 text-lg h-auto shadow-2xl shadow-yellow-500/30 rounded-full font-bold transition-all duration-300 hover:scale-105 group"
          >
            <Send className="w-5 h-5 mr-3" />
            Launch Telegram Bot
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-1">
              500+
            </div>
            <div className="text-sm text-slate-600">
              MTN Partners
            </div>
          </div>
          <div className="w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-1">
              &lt;2min
            </div>
            <div className="text-sm text-slate-600">
              Registration
            </div>
          </div>
          <div className="w-px h-12 bg-slate-300"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-1">
              15GB
            </div>
            <div className="text-sm text-slate-600">
              Free Monthly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}