import { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp, User } from 'lucide-react';

interface Session {
  time: string;
  title: string;
  speaker?: string;
  description: string;
  type: 'keynote' | 'presentation' | 'panel' | 'break';
  affiliation?: string;
  logo?: string;
}

const schedule: Session[] = [
  {
    time: '8:30 AM',
    title: 'Breakfast & Registration',
    description: 'Welcome coffee, light breakfast, and check-in. Doors open at 8:45 AM.',
    type: 'break',
  },
  {
    time: '9:30 AM',
    title: 'Opening Remarks',
    speaker: 'Adam Klivans',
    description: 'Welcome and introduction to the Fall AI Research Symposium celebrating IFML\'s 5 Year Anniversary',
    type: 'presentation',
    affiliation: 'UT Austin',
    logo: '/2560px-University_of_Texas_at_Austin_logo.svg.png',
  },
  {
    time: '10:00 AM',
    title: 'Diffusion Models Research',
    speaker: 'Sanjay Shakkottai',
    description: 'Deep dive into diffusion models and their applications in generative AI',
    type: 'presentation',
    affiliation: 'UT Austin',
    logo: '/2560px-University_of_Texas_at_Austin_logo.svg.png',
  },
  {
    time: '11:00 AM',
    title: 'Research Keynote',
    speaker: 'Amin Karbasi',
    description: 'Perspectives on foundation models, optimization, and the future of generative AI',
    type: 'keynote',
    affiliation: 'Cisco Foundation AI',
    logo: '/black-logo.99bfada1.svg',
  },
  {
    time: '12:00 PM',
    title: 'Lunch',
    description: 'Catered lunch provided for all attendees with networking opportunities',
    type: 'break',
  },
  {
    time: '1:00 PM',
    title: 'Deep Proteins Research',
    speaker: 'Danny Diaz',
    description: 'Exploring AI applications in protein structure prediction and biological discovery',
    type: 'presentation',
    affiliation: 'IFML',
    logo: '/IFML_wordmark.png',
  },
  {
    time: '2:00 PM',
    title: 'Vision & Multimodal AI',
    speaker: 'Kristen Grauman',
    description: 'Advances in computer vision and multimodal generative AI systems',
    type: 'presentation',
    affiliation: 'UT Austin',
    logo: '/2560px-University_of_Texas_at_Austin_logo.svg.png',
  },
  {
    time: '3:30 PM',
    title: 'Keynote Research Presentation',
    speaker: 'Vahab Mirrokni',
    description: 'Large language models, fine-tuning strategies, and real-world applications',
    type: 'keynote',
    affiliation: 'Google Research',
    logo: '/google.png',
  },
  {
    time: '4:15 PM',
    title: 'Panel Discussion: Controversial & Emerging Topics in AI',
    speaker: 'Moderated by Adam Klivans',
    description: 'Industry leaders discuss ethics, safety, emerging capabilities, and the future direction of generative AI research',
    type: 'panel',
    affiliation: 'IFML',
    logo: '/IFML_wordmark.png',
  },
  {
    time: '5:00 PM',
    title: 'Closing Remarks',
    description: 'Final thoughts and opportunities for continued collaboration',
    type: 'break',
  },
];

const typeColors = {
  keynote: 'bg-navy text-white',
  presentation: 'bg-burnt-orange text-white',
  panel: 'bg-green text-white',
  break: 'bg-tan-medium text-slate-dark',
};

const typeLabels = {
  keynote: 'Keynote',
  presentation: 'Research Talk',
  panel: 'Panel Discussion',
  break: 'Break',
};

export default function Agenda() {
  const [expandedSession, setExpandedSession] = useState<number | null>(null);

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-spartan font-bold text-slate-dark mb-4">
              Symposium Agenda
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A full day of cutting-edge research presentations, keynotes, and panel discussions
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-slate-dark bg-tan-light px-6 py-3 rounded-lg">
              <MapPin className="w-5 h-5 text-burnt-orange" />
              <span className="font-semibold">Mulva Auditorium | Engineering Education and Research Center (EER), Austin, TX</span>
            </div>
          </div>

          <div className="space-y-4">
            {schedule.map((session, index) => (
              <div
                key={index}
                className="bg-white border-2 border-tan-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-burnt-orange"
              >
                <button
                  onClick={() => setExpandedSession(expandedSession === index ? null : index)}
                  className="w-full text-left"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-slate-dark text-white px-4 py-2 rounded-lg font-bold text-center min-w-[100px]">
                          {session.time}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-xl font-spartan font-bold text-slate-dark leading-tight">
                            {session.title}
                          </h3>
                          <div className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold ${typeColors[session.type]}`}>
                            {typeLabels[session.type]}
                          </div>
                        </div>

                        {session.speaker && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <User className="w-4 h-4 text-burnt-orange" />
                            <span>{session.speaker}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex-shrink-0">
                        {expandedSession === index ? (
                          <ChevronUp className="w-6 h-6 text-burnt-orange" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-slate-dark" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>

                {expandedSession === index && (
                  <div className="px-6 pb-6 border-t-2 border-tan-light pt-4">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-gray-700 leading-relaxed flex-grow">{session.description}</p>
                      {session.logo && (
                        <img
                          src={session.logo}
                          alt={session.affiliation}
                          className={`object-contain flex-shrink-0 ${session.affiliation === 'Cisco Foundation AI' ? 'h-8' : 'h-12'}`}
                          title={session.affiliation}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
