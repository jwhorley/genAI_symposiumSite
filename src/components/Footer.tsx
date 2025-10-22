import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="font-spartan font-bold text-2xl mb-4 text-burnt-orange">
                Fall AI Research Symposium
              </h3>
              <p className="text-tan-light leading-relaxed">
                Celebrating IFML's 5-year anniversary with a day of thought provoking research presentations and engaging discussions on the future of generative AI.
              </p>
            </div>

            <div>
              <h4 className="font-spartan font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#agenda" className="text-tan-light hover:text-burnt-orange transition-colors">
                    View Agenda
                  </a>
                </li>
                <li>
                  <a href="#register" className="text-tan-light hover:text-burnt-orange transition-colors">
                    Register Now
                  </a>
                </li>
                <li>
                  <a href="mailto:info@ifml.institute" className="text-tan-light hover:text-burnt-orange transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-spartan font-bold text-lg mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-burnt-orange transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-burnt-orange transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-burnt-orange transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@ifml.institute"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-burnt-orange transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <img
              src="/UT-banner.png"
              alt="The University of Texas at Austin - What Starts Here Changes the World"
              className="w-full h-auto mb-6"
            />
            <div className="text-center text-tan-light text-sm">
              <p>
                &copy; {currentYear} Institute for Foundations of Machine Learning (IFML). All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
