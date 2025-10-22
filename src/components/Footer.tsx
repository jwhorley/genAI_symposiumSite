import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="font-spartan font-bold text-2xl mb-4 text-white">
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
                  <a href="https://ifml.institute/contact" target="_blank" rel="noopener noreferrer" className="text-tan-light hover:text-burnt-orange transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-spartan font-bold text-lg mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://x.com/MLFoundations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-burnt-orange transition-all duration-300"
                  aria-label="X (formerly Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="mailto:IFML@austin.utexas.edu"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-burnt-orange transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <img
          src="/UT-banner.png"
          alt="The University of Texas at Austin - What Starts Here Changes the World"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="container mx-auto px-6 mt-6">
        <div className="max-w-6xl mx-auto text-center text-tan-light text-sm">
          <p>
            &copy; {currentYear} Institute for Foundations of Machine Learning (IFML). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
