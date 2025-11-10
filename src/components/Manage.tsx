import { Calculator, BarChart3, Users, Briefcase } from 'lucide-react';

export default function Manage() {
  const services = [
    {
      icon: Calculator,
      title: 'Personal Financial Planning',
      description: 'Comprehensive financial planning including budgeting, debt management, and wealth building strategies.',
      features: ['Budget optimization', 'Debt reduction plans', 'Savings strategies', 'Tax planning']
    },
    {
      icon: BarChart3,
      title: 'Investment Portfolio Management',
      description: 'Professional management and rebalancing of your investment portfolio aligned with your goals.',
      features: ['Portfolio analysis', 'Asset allocation', 'Risk assessment', 'Performance tracking']
    },
    {
      icon: Briefcase,
      title: 'Small Business Financial Services',
      description: 'CFO-level financial services for growing businesses that need expert guidance without full-time costs.',
      features: ['Cash flow management', 'Financial forecasting', 'P&L optimization', 'Growth planning']
    },
    {
      icon: Users,
      title: 'Family Office Services',
      description: 'Comprehensive wealth management for families seeking coordinated financial oversight.',
      features: ['Multi-generational planning', 'Estate coordination', 'Tax optimization', 'Legacy planning']
    }
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
    <section id="manage" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Expert Financial Management
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you're an individual looking to optimize your finances or a business needing strategic
            financial guidance, we provide professional services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>
              <ul className="space-y-2 text-sm md:text-base">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6 md:p-12 text-center text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Why Work With Us?
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-8 max-w-5xl mx-auto">
            <div>
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">15+</div>
              <div className="text-amber-100 text-xs md:text-base">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">$50M+</div>
              <div className="text-amber-100 text-xs md:text-base">Assets Under Management</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">98%</div>
              <div className="text-amber-100 text-xs md:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 text-center">
              Our Approach to Financial Management
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                We believe that effective financial management starts with understanding your unique situation,
                goals, and risk tolerance. Unlike one-size-fits-all solutions, we create customized strategies
                that align with your specific objectives.
              </p>
              <p>
                Our process is built on three pillars: <strong>clarity</strong> (understanding where you are today),
                <strong>strategy</strong> (creating a roadmap to where you want to be), and <strong>execution</strong> (implementing
                and monitoring your plan with discipline).
              </p>
              <p>
                We provide ongoing support and adjust strategies as your life circumstances change, ensuring
                you stay on track toward your financial goals.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToContact}
            className="bg-slate-900 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all hover:scale-105"
          >
            Schedule a Consultation
          </button>
          <p className="text-slate-500 mt-4 text-sm">
            Initial consultation is complimentary. No obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
