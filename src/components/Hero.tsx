import { Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tan-light via-white to-sky/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-burnt-orange/5 via-transparent to-navy/5"></div>

      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
        <img
          src="/RGB_cgai_formal.png"
          alt="Center for Generative AI - Machine Learning Laboratory"
          className="h-12 md:h-16 lg:h-20 w-auto"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="bg-burnt-orange/10 border-2 border-burnt-orange px-6 py-2 rounded-full">
              <p className="text-burnt-orange font-spartan font-bold text-sm tracking-wider uppercase">
                IFML 5 Year Anniversary
              </p>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-spartan font-bold text-slate-dark mb-6 leading-tight">
            Fall AI Research<br />
            <span className="text-burnt-orange">Symposium</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Celebrating five years of innovation with perspectives on foundation models, diffusion, LLMs, vision, and the future of generative AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-slate-dark">
              <Calendar className="w-5 h-5 text-burnt-orange" />
              <span className="font-medium">November 5, 2025 • 9:30 AM - 5:00 PM CST</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-burnt-orange"></div>
            <div className="flex items-center gap-2 text-slate-dark">
              <MapPin className="w-5 h-5 text-burnt-orange" />
              <span className="font-medium">Mulva Auditorium | EER, Austin, TX</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="group relative px-8 py-4 bg-burnt-orange text-white font-spartan font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-slate-dark transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#agenda"
              className="px-8 py-4 bg-white border-2 border-slate-dark text-slate-dark font-spartan font-bold text-lg rounded-lg transition-all duration-300 hover:bg-slate-dark hover:text-white hover:shadow-xl"
            >
              View Agenda
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
