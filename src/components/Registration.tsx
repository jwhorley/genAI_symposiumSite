import { Ticket, Users, Award, BookOpen } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'Expert Sessions',
    description: 'Learn from leading researchers and practitioners in generative AI',
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with peers, collaborators, and industry leaders',
  },
  {
    icon: Award,
    title: 'Hands-on Workshops',
    description: 'Practical experience with latest tools and techniques',
  },
  {
    icon: Ticket,
    title: 'Conference Materials',
    description: 'Access to presentations, code samples, and resources',
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
              Join Us This Spring
            </h2>
            <p className="text-lg text-tan-light max-w-2xl mx-auto">
              Secure your spot at the premier generative AI research conference
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
                  Early Bird Pricing Available
                </p>
              </div>
              <h3 className="text-3xl font-spartan font-bold text-slate-dark mb-4">
                Register on Eventbrite
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Choose from multiple registration tiers including student discounts, academic rates, and industry passes. All registrations include full access to sessions, workshops, and networking events.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://www.eventbrite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full py-5 bg-burnt-orange text-white font-spartan font-bold text-xl rounded-xl transition-all duration-300 hover:bg-slate-dark hover:shadow-2xl hover:scale-105 text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Ticket className="w-6 h-6" />
                  View Tickets & Register
                </span>
                <div className="absolute inset-0 bg-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                <div className="flex-1 bg-tan-light p-4 rounded-lg text-center">
                  <p className="font-bold text-slate-dark mb-1">Student Rate</p>
                  <p>Available with valid ID</p>
                </div>
                <div className="flex-1 bg-tan-light p-4 rounded-lg text-center">
                  <p className="font-bold text-slate-dark mb-1">Group Discounts</p>
                  <p>3+ attendees save 15%</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-tan-medium text-center">
              <p className="text-gray-600 text-sm">
                Questions about registration?{' '}
                <a href="mailto:info@genaiworkshop.com" className="text-burnt-orange font-semibold hover:underline">
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
