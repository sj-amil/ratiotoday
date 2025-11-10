import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">ratio.today</h3>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
              Empowering financial independence through education, disciplined investing, and expert management.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Services</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <button onClick={() => scrollToSection('learn')} className="text-slate-400 hover:text-white transition-colors">
                  Financial Education
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('invest')} className="text-slate-400 hover:text-white transition-colors">
                  Private Equity
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('manage')} className="text-slate-400 hover:text-white transition-colors">
                  Wealth Management
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('manage')} className="text-slate-400 hover:text-white transition-colors">
                  Business Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Company</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-slate-400 hover:text-white transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Resources</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Investment Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Financial Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-slate-400 text-xs md:text-sm">
              © 2024 ratio.today. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm flex-wrap justify-center md:justify-end">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Disclosures
              </a>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center md:text-left">
            Investment opportunities are subject to risk. Past performance is not indicative of future results.
            All investments involve risk of loss. Please consult with a financial advisor before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
