import { Link } from 'react-router-dom';
import bcLogo from '../assets/Blockchain Club Logo (Circle).png';
import vitLogo from '../assets/logovitbhopal.jpeg';

export default function TopBar() {
  return (
    <div className="w-full relative z-40 bg-white">
      {/* Absolute top utility containing logos to the left and Registration CTA to the right */}
      <div className="bg-[#f8f9fa] border-b border-gray-200 h-20 flex items-center justify-between px-4 md:px-8">
        
        <div className="flex items-center gap-4 h-full">
           {/* Blockchain Club & VIT Bhopal Logos */}
           <img src={bcLogo} alt="Blockchain Club Logo" className="h-12 w-12 rounded-full object-cover shadow-sm border border-gray-200" />
           <div className="w-px h-8 bg-gray-300"></div>
           <img src={vitLogo} alt="VIT Bhopal Logo" className="h-12 w-auto object-contain rounded-sm" />
        </div>
        
        <div className="flex items-center gap-3">
          {/* Top Level Registration Button */}
          <Link to="/" className="text-sm font-black px-6 py-2.5 bg-[#ea580c] text-white rounded-md hover:bg-[#c2410c] transition-colors uppercase tracking-wider shadow-sm">
             Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}
