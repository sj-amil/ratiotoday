import { Building2, FileText, TrendingUp, Shield, DollarSign, Clock } from 'lucide-react';

export default function Invest() {
  const features = [
    {
      icon: Building2,
      title: 'Fixed-Asset Backed',
      description: 'Every investment is secured by real, tangible assets with intrinsic value.'
    },
    {
      icon: Shield,
      title: 'Transparent Reporting',
      description: 'Detailed quarterly reports showing exactly how your money is performing.'
    },
    {
      icon: DollarSign,
      title: 'Profit Sharing',
      description: 'Aligned incentives mean we only win when you win. True partnership.'
    },
    {
      icon: Clock,
      title: 'Stable Returns',
      description: 'Focus on consistent, long-term growth rather than volatile speculation.'
    }
  ];

  const stats = [
    { value: '12-18%', label: 'Target Annual Returns' },
    { value: '100%', label: 'Asset-Backed' },
    { value: '$25k', label: 'Minimum Investment' },
    { value: '5+ years', label: 'Track Record' }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="invest" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Private Equity, Made Accessible
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our private equity service invests in carefully selected, fixed-asset opportunities.
            Real estate, equipment financing, and infrastructure projects that generate stable returns.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 md:p-6 bg-slate-50 rounded-xl">
              <div className="text-2xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium text-xs md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 p-6 md:p-6 bg-slate-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 md:p-12 mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">Apply to Invest</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Submit your information and investment goals. We'll schedule a consultation call.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">Review Opportunities</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We present current opportunities with full documentation and risk analysis.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">Invest & Track</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Fund your investment and receive quarterly reports with detailed performance metrics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6">
            <FileText className="text-amber-600 flex-shrink-0" size={32} />
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                Investment Philosophy
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm md:text-base">
                We follow a principle-driven approach inspired by the world's most successful investors.
                Our strategy prioritizes: <strong>capital preservation</strong>, <strong>diversification across uncorrelated assets</strong>,
                and <strong>transparent communication</strong>. We avoid speculation and focus on understanding fundamental value.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                Every investment is thoroughly vetted with detailed due diligence. We only proceed when the risk-reward
                ratio is favorable and the underlying asset provides real security.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToContact}
            className="bg-slate-900 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <TrendingUp size={20} />
            Apply to Invest
          </button>
          <p className="text-slate-500 mt-4 text-sm">
            Accredited investors only. Minimum investment $25,000.
          </p>
        </div>
      </div>
    </section>
  );
}
