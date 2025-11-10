import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Tech Entrepreneur',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'ratio.today helped me transition from startup chaos to financial clarity. Their educational content gave me the foundation, and their investment service has delivered consistent returns. The transparency is refreshing.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Small Business Owner',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'As a business owner, I needed someone who understood both personal and business finances. Their management services have optimized our cash flow and reduced our tax burden significantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Corporate Executive',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The principle-driven approach resonates with me. No gimmicks, no hype—just solid financial education and asset-backed investments. My portfolio has never been more stable.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Forward-Thinking Investors
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Real stories from clients who've transformed their financial futures with ratio.today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 p-6 md:p-8 rounded-xl relative hover:shadow-md transition-shadow">
              <Quote className="text-amber-600 opacity-20 absolute top-6 right-6" size={48} />
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-slate-600 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed italic text-sm md:text-base">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2">500+</div>
            <div className="text-slate-600 text-xs md:text-base">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2">$75M+</div>
            <div className="text-slate-600 text-xs md:text-base">Assets Managed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2">4.9/5</div>
            <div className="text-slate-600 text-xs md:text-base">Client Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2">15%</div>
            <div className="text-slate-600 text-xs md:text-base">Avg. Annual Return</div>
          </div>
        </div>
      </div>
    </section>
  );
}
