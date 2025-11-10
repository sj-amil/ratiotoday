import { BookOpen, Video, Mail, FileText, TrendingUp, Wallet } from 'lucide-react';
import { useState } from 'react';

export default function Learn() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const categories = [
    {
      icon: FileText,
      title: 'Skill Development',
      description: 'Learn high-income skills that directly increase your earning potential.',
      topics: ['Freelancing', 'Digital Marketing', 'Sales', 'Consulting']
    },
    {
      icon: TrendingUp,
      title: 'Investment Strategies',
      description: 'Understand different asset classes and how to build a diversified portfolio.',
      topics: ['Real Estate', 'Stocks & Bonds', 'Private Equity', 'Risk Management']
    },
    {
      icon: Wallet,
      title: 'Money Management',
      description: 'Master budgeting, saving, and financial planning for long-term success.',
      topics: ['Budgeting', 'Tax Strategy', 'Debt Management', 'Retirement Planning']
    }
  ];

  return (
    <section id="learn" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Financial Education That Pays
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Build the knowledge foundation you need to earn more, invest smarter, and manage money effectively.
            Our content is practical, actionable, and designed to create real results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <category.icon className="text-amber-600" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{category.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed text-sm md:text-base">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.topics.map((topic, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 rounded-xl text-white">
            <Video className="text-amber-400 mb-4" size={32} />
            <h3 className="text-xl md:text-2xl font-bold mb-3">Video Courses</h3>
            <p className="text-slate-200 mb-4 leading-relaxed text-sm md:text-base">
              Step-by-step video tutorials on earning, investing, and managing money. Learn at your own pace.
            </p>
            <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-sm md:text-base w-full md:w-auto">
              Browse Courses
            </button>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-6 md:p-8 rounded-xl text-white">
            <BookOpen className="text-white mb-4" size={32} />
            <h3 className="text-xl md:text-2xl font-bold mb-3">Weekly Blog</h3>
            <p className="text-amber-50 mb-4 leading-relaxed text-sm md:text-base">
              Fresh insights on market trends, investment opportunities, and personal finance strategies.
            </p>
            <button className="bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors text-sm md:text-base w-full md:w-auto">
              Read Latest Posts
            </button>
          </div>
        </div>

        <div className="bg-white p-6 md:p-12 rounded-xl shadow-sm border border-gray-100 text-center">
          <Mail className="text-amber-600 mx-auto mb-4" size={40} />
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Weekly Financial Insights
          </h3>
          <p className="text-base md:text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Join thousands of readers who get actionable financial tips, market analysis,
            and exclusive investment opportunities delivered every week.
          </p>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 md:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm md:text-base"
              />
              <button
                type="submit"
                className="bg-slate-900 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-sm md:text-base whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-green-600 font-semibold text-base md:text-lg">
              Thanks for subscribing! Check your inbox.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

