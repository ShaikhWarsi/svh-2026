import { Globe, MessageSquare, Video, Users, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a1b3f] text-white pt-16 pb-8 relative z-50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
          
          {/* Left Column: Follow Us */}
          <div className="flex-1">
            <h3 className="text-lg font-black font-inter mb-6 tracking-wide">FOLLOW US</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-sih-orange transition-colors">
                <Globe className="w-7 h-7" />
              </a>
              <a href="#" className="hover:text-sih-orange transition-colors">
                <MessageSquare className="w-7 h-7" />
              </a>
              <a href="#" className="hover:text-sih-orange transition-colors">
                <Video className="w-7 h-7" />
              </a>
              <a href="#" className="hover:text-sih-orange transition-colors">
                <Users className="w-7 h-7" />
              </a>
            </div>
            <p className="text-sm mt-8 opacity-80">
              &copy; {currentYear}-{currentYear + 1} Smart VIT Bhopal Hackathon. All rights reserved
            </p>
          </div>

          {/* Right Column: Contact Us */}
          <div className="flex-1">
            <h3 className="text-lg font-black font-inter mb-6 tracking-wide">CONTACT US</h3>
            <div className="flex flex-col gap-3 text-sm opacity-90">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 7566 XXX XXX, +91 7566 YYY YYY</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span>svh@vitbhopal.ac.in, bc@vitbhopal.ac.in</span>
              </div>
            </div>
          </div>

          {/* Notice Map / Graphic Placeholder (Seen in screenshot 5 bottom right) */}
          <div className="hidden lg:block w-72 h-40 bg-white/10 rounded border border-white/20 p-2 overflow-hidden relative">
             {/* Small visual mock of the portal dashboard screenshot in the actual footer */}
             <div className="w-full h-full bg-white rounded-sm opacity-50 flex items-center justify-center">
                 <span className="text-xs text-sih-navy font-bold">SVH Dashboard Preview</span>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
