import { useState } from 'react';
import { Clock, MapPin, ChevronDown, ChevronUp, User } from 'lucide-react';

interface Session {
  time: string;
  title: string;
  speaker?: string;
  location?: string;
  description: string;
  type: 'keynote' | 'workshop' | 'panel' | 'break' | 'networking';
}

interface DaySchedule {
  date: string;
  sessions: Session[];
}

const schedule: DaySchedule[] = [
  {
    date: 'Day 1 - Opening & Foundations',
    sessions: [
      {
        time: '9:00 AM',
        title: 'Registration & Welcome Coffee',
        location: 'Main Hall',
        description: 'Check-in, networking, and light refreshments',
        type: 'break',
      },
      {
        time: '10:00 AM',
        title: 'Opening Keynote: The Future of Generative AI',
        speaker: 'Dr. Sarah Mitchell',
        location: 'Auditorium',
        description: 'Exploring the transformative impact of generative AI across industries and research domains',
        type: 'keynote',
      },
      {
        time: '11:30 AM',
        title: 'Foundation Models: Architecture & Training',
        speaker: 'Prof. James Chen',
        location: 'Conference Room A',
        description: 'Deep dive into transformer architectures, training methodologies, and scaling laws',
        type: 'workshop',
      },
      {
        time: '1:00 PM',
        title: 'Lunch & Networking',
        location: 'Courtyard',
        description: 'Catered lunch with opportunities to connect with fellow attendees',
        type: 'break',
      },
      {
        time: '2:30 PM',
        title: 'Hands-on: Prompt Engineering Techniques',
        speaker: 'Dr. Maria Rodriguez',
        location: 'Lab 101',
        description: 'Interactive workshop on effective prompt design, chain-of-thought, and few-shot learning',
        type: 'workshop',
      },
      {
        time: '4:00 PM',
        title: 'Panel: Ethics & Responsible AI Development',
        location: 'Auditorium',
        description: 'Industry leaders discuss bias, safety, and governance in generative AI systems',
        type: 'panel',
      },
      {
        time: '5:30 PM',
        title: 'Evening Reception',
        location: 'Rooftop Terrace',
        description: 'Casual networking with drinks and appetizers',
        type: 'networking',
      },
    ],
  },
  {
    date: 'Day 2 - Applications & Innovation',
    sessions: [
      {
        time: '9:00 AM',
        title: 'Morning Coffee & Discussions',
        location: 'Main Hall',
        description: 'Informal networking and discussions',
        type: 'break',
      },
      {
        time: '10:00 AM',
        title: 'Multimodal AI: Vision, Language, and Beyond',
        speaker: 'Dr. Alex Thompson',
        location: 'Auditorium',
        description: 'Latest advances in models that understand and generate across multiple modalities',
        type: 'keynote',
      },
      {
        time: '11:30 AM',
        title: 'Fine-tuning & Domain Adaptation',
        speaker: 'Dr. Lisa Wang',
        location: 'Conference Room A',
        description: 'Practical strategies for adapting foundation models to specific use cases',
        type: 'workshop',
      },
      {
        time: '1:00 PM',
        title: 'Lunch & Poster Session',
        location: 'Exhibition Hall',
        description: 'Lunch with research poster presentations',
        type: 'break',
      },
      {
        time: '2:30 PM',
        title: 'Generative AI in Research & Discovery',
        speaker: 'Prof. Michael Davis',
        location: 'Conference Room B',
        description: 'Applications in scientific research, drug discovery, and materials science',
        type: 'workshop',
      },
      {
        time: '4:00 PM',
        title: 'Closing Keynote: AI Agents & Future Directions',
        speaker: 'Dr. Emily Zhang',
        location: 'Auditorium',
        description: 'The evolution toward autonomous AI systems and what comes next',
        type: 'keynote',
      },
      {
        time: '5:30 PM',
        title: 'Closing Remarks & Farewell',
        location: 'Auditorium',
        description: 'Final thoughts and next steps for continued collaboration',
        type: 'networking',
      },
    ],
  },
];

const typeColors = {
  keynote: 'bg-navy text-white',
  workshop: 'bg-burnt-orange text-white',
  panel: 'bg-green text-white',
  break: 'bg-tan-medium text-slate-dark',
  networking: 'bg-sky text-white',
};

const typeLabels = {
  keynote: 'Keynote',
  workshop: 'Workshop',
  panel: 'Panel Discussion',
  break: 'Break',
  networking: 'Networking',
};

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedSession, setExpandedSession] = useState<number | null>(null);

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-spartan font-bold text-slate-dark mb-4">
              Conference Agenda
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Two days of cutting-edge research, hands-on workshops, and networking opportunities
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            {schedule.map((day, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveDay(index);
                  setExpandedSession(null);
                }}
                className={`px-8 py-4 rounded-lg font-spartan font-bold text-lg transition-all duration-300 ${
                  activeDay === index
                    ? 'bg-burnt-orange text-white shadow-lg scale-105'
                    : 'bg-tan-light text-slate-dark hover:bg-tan-medium'
                }`}
              >
                {day.date}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {schedule[activeDay].sessions.map((session, index) => (
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

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          {session.speaker && (
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-burnt-orange" />
                              <span>{session.speaker}</span>
                            </div>
                          )}
                          {session.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-burnt-orange" />
                              <span>{session.location}</span>
                            </div>
                          )}
                        </div>
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
                    <p className="text-gray-700 leading-relaxed">{session.description}</p>
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
