import { Target, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Built on Principles, Not Hype
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            ratio.today was founded on the belief that financial success comes from timeless principles,
            not get-rich-quick schemes. We help you develop skills, make smart investments, and manage
            your money with discipline and transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Clear Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              Empower individuals to achieve financial independence through education, disciplined investing,
              and smart money management.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Transparency First</h3>
            <p className="text-slate-600 leading-relaxed">
              Every investment is backed by real, fixed assets. We provide clear reports, honest returns,
              and complete visibility into where your money goes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Partner Mindset</h3>
            <p className="text-slate-600 leading-relaxed">
              We succeed when you succeed. Our profit-sharing model aligns our interests with yours,
              creating a true partnership for long-term growth.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Inspired by the Best
          </h3>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Drawing from the principles of legendary investors like Ray Dalio, we focus on radical
            transparency, diversification, and understanding economic realities. Our approach combines
            time-tested wisdom with modern accessibility.
          </p>
        </div>
      </div>
    </section>
  );
}
