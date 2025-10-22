import { Brain, Sparkles, Target, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'Deep Technical Insights',
    description: 'Explore the latest research in foundation models, multimodal AI, and emerging architectures',
  },
  {
    icon: Sparkles,
    title: 'Practical Applications',
    description: 'Real-world case studies across healthcare, science, creative industries, and enterprise',
  },
  {
    icon: Target,
    title: 'Responsible Development',
    description: 'Address ethics, bias mitigation, safety alignment, and governance frameworks',
  },
  {
    icon: Zap,
    title: 'Hands-on Experience',
    description: 'Interactive workshops covering prompt engineering, fine-tuning, and deployment strategies',
  },
];

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-tan-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block bg-burnt-orange px-4 py-2 rounded-full mb-6">
                <p className="text-white font-spartan font-bold text-sm uppercase tracking-wide">
                  About the Workshop
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-spartan font-bold text-slate-dark mb-6 leading-tight">
                Advancing the Frontier of Generative AI
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Generative AI Workshop 2025 brings together the brightest minds in artificial intelligence to explore the transformative potential of generative models. From large language models to multimodal systems, we're witnessing a paradigm shift in how machines understand and create.
                </p>
                <p>
                  This two-day intensive conference features keynote presentations from industry pioneers, hands-on technical workshops, panel discussions on responsible AI development, and unparalleled networking opportunities with researchers and practitioners shaping the future of the field.
                </p>
                <p>
                  Whether you're conducting cutting-edge research, building production systems, or exploring new applications, this workshop offers the knowledge, connections, and inspiration to accelerate your work in generative AI.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-burnt-orange/20 to-navy/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border-4 border-burnt-orange">
                <img
                  src="/longhornONLY_Generative AI Workshop 2025  5x7.png"
                  alt="Longhorn"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-tan-medium rounded-xl p-8 hover:border-burnt-orange hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-burnt-orange rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-spartan font-bold text-slate-dark mb-3">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
