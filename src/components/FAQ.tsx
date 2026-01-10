import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I get started with DataBridge?",
      answer: "Simply click the 'Get Started' button to access our Telegram bot. The registration process takes less than 2 minutes. You'll need to provide details for at least 3 MTN SIM cards to begin your partnership."
    },
    {
      question: "When will I receive my free data?",
      answer: "Your 15GB allocation is delivered automatically every month after we purchase the 65GB bundle on your registered SIM cards. The process is fully automated and requires no action from you."
    },
    {
      question: "Can I use other networks besides MTN?",
      answer: "No. This partnership program is exclusively for MTN Nigeria lines. Only MTN SIM cards are accepted into the program."
    },
    {
      question: "What happens if I exceed my 15GB limit?",
      answer: "Exceeding your allocated 15GB per SIM will result in immediate and permanent termination from the program with no warnings or appeals. Please monitor your usage carefully."
    },
    {
      question: "Can I share my allocated data with friends or family?",
      answer: "Absolutely not. Data sharing or transfers from partnered lines is strictly prohibited and will result in instant account termination and permanent ban from the program."
    },
    {
      question: "How many SIM cards can I register?",
      answer: "You must register a minimum of 3 MTN SIM cards. There's no maximum limit - the more SIMs you register, the more free data you receive monthly (15GB per SIM)."
    },
    {
      question: "Is this service legitimate and safe?",
      answer: "Yes! We have 500+ active partners across Nigeria. Our service is fully automated and transparent. All terms and conditions are clearly stated, and we maintain a professional partnership with all our users."
    },
    {
      question: "What if I want to stop the partnership?",
      answer: "You can discontinue your partnership at any time through our Telegram bot. However, once terminated, you cannot rejoin the program with the same SIM cards."
    },
    {
      question: "Do I need to pay anything?",
      answer: "No. The partnership is completely free. We purchase the bundles on your behalf. You simply enjoy your 15GB allocation while we utilize the remaining 50GB to serve our customers."
    }
  ];

  return (
    <section id="faq" className="px-6 py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-100 border border-yellow-300 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-yellow-700" />
            <span className="text-sm font-semibold text-yellow-700 uppercase tracking-wider">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-slate-900 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the DataBridge MTN Partnership Program
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-yellow-400 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-lg text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-yellow-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-slate-700 leading-relaxed border-t border-slate-200 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gradient-to-br from-yellow-50 to-slate-50 rounded-2xl border-2 border-yellow-200">
          <p className="text-slate-700 mb-4">
            <span className="font-bold">Still have questions?</span> Connect with our Telegram bot for personalized assistance.
          </p>
          <button 
            onClick={() => window.open('https://t.me/databridgerobot', '_blank')}
            className="inline-flex items-center gap-2 text-yellow-600 font-bold hover:text-yellow-700 transition-colors"
          >
            Contact Support via Telegram
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
}
