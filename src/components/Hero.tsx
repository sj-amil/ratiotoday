import { ArrowRight, TrendingUp, BookOpen, PieChart } from 'lucide-react';

export default function Hero() {
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
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Learn. Invest. Grow.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Master financial skills, invest in asset-backed opportunities, and build lasting wealth through principle-driven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('invest')}
              className="bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Investing
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('learn')}
              className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Explore Learning
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="text-amber-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Learn</h3>
            <p className="text-slate-600 leading-relaxed">
              Build financial literacy through expert guidance, practical skills, and proven strategies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-amber-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Invest</h3>
            <p className="text-slate-600 leading-relaxed">
              Access fixed-asset backed opportunities with transparent reporting and stable returns.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <PieChart className="text-amber-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Manage</h3>
            <p className="text-slate-600 leading-relaxed">
              Professional financial management services for individuals and growing businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
