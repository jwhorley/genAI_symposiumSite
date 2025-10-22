import { Ticket, Users, Award, BookOpen } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'Research Keynotes',
    description: 'Hear from distinguished speakers on the latest advances in generative AI',
  },
  {
    icon: Users,
    title: 'Expert Panel',
    description: 'Engage in discussions on controversial and emerging topics in AI',
  },
  {
    icon: Award,
    title: 'Meals Included',
    description: 'Breakfast and lunch provided for all registered attendees',
  },
  {
    icon: Ticket,
    title: 'Free Event',
    description: 'No cost to attend - open to all interested researchers and practitioners',
  },
];

export default function Registration() {
  return (
    <section id="register" className="py-20 bg-gradient-to-br from-slate-dark via-slate-medium to-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-burnt-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-spartan font-bold text-white mb-4">
              Reserve Your Spot
            </h2>
            <p className="text-lg text-tan-light max-w-2xl mx-auto">
              Free registration for the Fall AI Research Symposium celebrating IFML's 5-year anniversary
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-burnt-orange rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-spartan font-bold text-white text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-tan-light text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block bg-burnt-orange/10 px-4 py-2 rounded-full mb-4">
                <p className="text-burnt-orange font-spartan font-bold text-sm uppercase">
                  Free Event - Registration Required
                </p>
              </div>
              <h3 className="text-3xl font-spartan font-bold text-slate-dark mb-4">
                Register on Eventbrite
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                This is a free event open to all ages. Registration includes full access to all keynotes, research presentations, the panel discussion, plus breakfast and lunch. Paid parking available at EER.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://www.eventbrite.com/e/fall-ai-research-symposium-tickets-1855345691909"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full py-5 bg-burnt-orange text-white font-spartan font-bold text-xl rounded-xl transition-all duration-300 hover:bg-slate-dark hover:shadow-2xl hover:scale-105 text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Ticket className="w-6 h-6" />
                  Register for Free
                </span>
                <div className="absolute inset-0 bg-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                <div className="flex-1 bg-tan-light p-4 rounded-lg text-center">
                  <p className="font-bold text-slate-dark mb-1">All Ages Welcome</p>
                  <p>Open to everyone interested</p>
                </div>
                <div className="flex-1 bg-tan-light p-4 rounded-lg text-center">
                  <p className="font-bold text-slate-dark mb-1">Parking Available</p>
                  <p>Paid parking at venue</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-tan-medium text-center">
              <p className="text-gray-600 text-sm">
                Questions about registration?{' '}
                <a href="mailto:rrice@utexas.edu" className="text-burnt-orange font-semibold hover:underline">
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
