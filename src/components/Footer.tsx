import { Send, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 px-6 py-16 border-t-4 border-yellow-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                <Send className="w-6 h-6 text-slate-900" />
              </div>
              <span className="font-bold text-2xl text-white">DataBridge</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-3">
              Empowering MTN partnerships through innovative data solutions across Nigeria.
            </p>
            <div className="inline-block px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
              <span className="text-yellow-400 text-xs font-semibold">DATABRIDGE PARTNER PROGRAM</span>
            </div>
          </div>

          {/* Quick info */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4 text-lg">Partnership</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>15GB free monthly data</li>
                <li>Minimum 3 MTN SIMs</li>
                <li>Fully automated process</li>
                <li>Trusted by 500+ partners</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-lg">Platform</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Telegram bot interface</li>
                <li>Instant registration</li>
                <li>24/7 automated service</li>
                <li>Secure & reliable</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {currentYear} DataBridge Partner Bot. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>for MTN Nigeria users</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              This service is exclusively for MTN Nigeria users. By registering, you acknowledge and agree to our terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}