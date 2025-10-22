import { Brain, Sparkles, Target, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'Foundation Models',
    description: 'Explore cutting-edge research in large language models, optimization, and fine-tuning strategies',
  },
  {
    icon: Sparkles,
    title: 'Diffusion & Vision',
    description: 'Latest advances in diffusion models, computer vision, and multimodal AI systems',
  },
  {
    icon: Target,
    title: 'Scientific Applications',
    description: 'AI-driven breakthroughs in protein research, biological discovery, and scientific domains',
  },
  {
    icon: Zap,
    title: 'Future of AI',
    description: 'Panel discussions on controversial topics, emerging capabilities, and the path forward',
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
                  About the Symposium
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-spartan font-bold text-slate-dark mb-6 leading-tight">
                Celebrating 5 Years of IFML Innovation
              </h2>
              <div className="mb-8">
                <img
                  src="/NSF-IFML_lockup.png"
                  alt="NSF-IFML Logo"
                  className="h-16 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Fall AI Research Symposium marks five years of groundbreaking work at the Institute for Foundations of Machine Learning (IFML). This special event brings together leading researchers to share perspectives on the most transformative developments in generative AI.
                </p>
                <p>
                  Join us for a full day of research presentations covering foundation models, diffusion techniques, vision systems, and protein research. Hear from distinguished speakers including Amin Karbasi, Vahab Mirrokni, Kristen Grauman, and other pioneers shaping the field.
                </p>
                <p>
                  The symposium culminates in a thought-provoking panel discussion on controversial and emerging topics in AI, offering a unique opportunity to engage with the critical questions facing our community. Free event with breakfast and lunch provided.
                </p>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-3/4 max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-burnt-orange/20 to-navy/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl border-4 border-burnt-orange overflow-hidden">
                  <img
                    src="/longhornONLY_Generative AI Workshop 2025  5x7.png"
                    alt="Longhorn"
                    className="w-full h-auto rounded-lg object-cover object-center"
                    style={{ objectPosition: '50% 40%' }}
                    loading="lazy"
                  />
                </div>
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
