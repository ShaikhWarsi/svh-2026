import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Metrics from '../components/Metrics';
import Organizers from '../components/Organizers';
import { Megaphone, FileImage, ShieldCheck, CheckSquare, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Scroll Animations
    const ctx = gsap.context(() => {
      // Intro Text Animation
      gsap.fromTo(".what-is-text", 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 80%",
          }
        }
      );

      // Stat Cards Animation
      gsap.fromTo(".stat-card",
        { x: 50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "back.out(1.7)", 
          delay: 0.2,
          scrollTrigger: {
            trigger: flowRef.current,
            start: "top 70%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const steps = [
    { date: "Jun-Jul 2026", title: "Registration of SPOCs & Teams", desc: "Teams must finalize their 6-member rosters ensuring at least 1 female participant is included. Complete the ₹450 team fee payment early.", icon: <Megaphone className="w-6 h-6 text-white" /> },
    { date: "20 Jul-Aug 2026", title: "Internal PPT Submission", desc: "Carefully align your architectural plans with your chosen Problem Statements (max 2). A crisp, scalable tech stack must be identified.", icon: <FileImage className="w-6 h-6 text-white" /> },
    { date: "5-10 Aug 2026", title: "SVH PPT Evaluation", desc: "A rigorous internal panel will review the submissions. Only the top 5 most viable teams per Problem Statement will be greenlit.", icon: <ShieldCheck className="w-6 h-6 text-white" /> },
    { date: "Post 10 Aug", title: "Result Publication", desc: "The official top 60 team roster will be publicly declared across internal boards. Prepare mentally for the intense main event.", icon: <CheckSquare className="w-6 h-6 text-white" /> },
    { date: "24-25 Aug 2026", title: "SVH Grand Finale", desc: "The final 12-hour accelerated prototype sprint begins offline at VIT Bhopal. Deliver a functional MVP to the judges.", icon: <Award className="w-6 h-6 text-white" /> }
  ];

  return (
    <div className="w-full">
      {/* What is SVH Section */}
      <section ref={introRef} className="pt-20 pb-16 px-4 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
        <h1 className="what-is-text text-4xl md:text-5xl font-black font-inter text-[#0f2942] uppercase tracking-tight mb-8 border-l-8 border-sih-orange pl-4">
          What is SVH?
        </h1>
        <div className="what-is-text bg-[#fce4c0]/30 p-8 rounded-xl border border-[#fce4c0] shadow-sm">
          <p className="text-gray-700 font-roboto text-lg leading-loose text-justify font-medium">
            The Smart VIT Bhopal Hackathon (SVH) represents a premier internal collegiate simulation strictly modeled on the prestigious national-level Smart India Hackathon. Conceived to act as a rigorous crucible for emerging tech talent, SVH compresses standard 36-hour hackathon endurance tests into a highly focused, two-day, 12-hour developmental sprint. This deliberate structural constraint trains participants to prioritize minimum viable product generation over feature creep. By adopting the exact judging criteria, funnel mechanisms, and presentation standards of SIH, our internal panels identify and groom the strongest possible teams. Up to 60 top-tier combinations will rise through the preliminary presentation phase to reach the prototype showdown. Ultimately, SVH is an incubator of grit, fostering the critical thinking and rapid-deployment skills needed to represent the university dominantly on the Indian national stage. 
          </p>
        </div>
      </section>

      {/* Main Split Flow & Stats Section */}
      <section id="process-flow" className="py-16 px-4 lg:px-8 max-w-[1400px] mx-auto bg-white border-t border-gray-100">
        
        <div className="flex flex-col xl:flex-row gap-12">
          
          {/* Left Column: Process Flow (Rebuilt from scratch to match detailed vertically aligned timeline block) */}
          <div className="flex-1" ref={flowRef}>
            <h2 className="text-3xl font-black font-inter text-sih-orange uppercase tracking-tight mb-10">
              SVH PROCESS FLOW AND TIMELINE
            </h2>
            
            <div className="relative border-l-4 border-[#0ea5e9] ml-8 space-y-12 pb-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative pl-10 pr-4">
                  {/* Circle Node */}
                  <div className="absolute -left-[18px] top-1 w-8 h-8 rounded-full bg-sih-navy border-4 border-white flex items-center justify-center shadow-md">
                     <div className="w-2 h-2 bg-sih-orange rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 bg-[#fce4c0] text-[#0f2942] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                      {step.date}
                    </span>
                    <h3 className="text-xl font-bold font-inter text-[#0f2942] mb-3">{step.title}</h3>
                    <p className="text-gray-600 font-roboto text-sm leading-relaxed text-justify">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Internal Hackathons Stats */}
          <div className="w-full xl:w-[450px] flex flex-col pt-[5.5rem]">
             <div className="bg-[#0f2942] rounded-2xl p-8 shadow-xl sticky top-32 overflow-hidden border-2 border-[#0ea5e9]/20 relative">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-sih-orange blur-3xl opacity-20"></div>
                
                <h3 className="text-white text-3xl font-black font-inter tracking-tight mb-8">Internal Hackathons</h3>
                
                <div className="flex flex-col gap-6 mb-10">
                   {/* Stat 1 */}
                   <div className="stat-card flex items-center bg-white/10 rounded-xl p-4 border border-white/20 backdrop-blur-sm">
                      <div className="w-16 h-16 bg-sih-orange rounded-lg flex items-center justify-center shrink-0 shadow-lg">
                         <span className="text-white text-3xl font-black">12</span>
                      </div>
                      <div className="ml-4">
                         <span className="text-white font-bold font-inter leading-tight block">PROBLEM <br/> STATEMENTS</span>
                      </div>
                   </div>

                   {/* Stat 2 */}
                   <div className="stat-card flex items-center bg-white/10 rounded-xl p-4 border border-white/20 backdrop-blur-sm">
                      <div className="w-16 h-16 bg-[#16a34a] rounded-lg flex items-center justify-center shrink-0 shadow-lg">
                         <span className="text-white text-3xl font-black">6</span>
                      </div>
                      <div className="ml-4 flex flex-col">
                         <span className="text-white font-bold font-inter uppercase tracking-wide">Members/Team</span>
                         <span className="text-sih-orange text-[10px] font-black tracking-widest mt-1">TOTAL TEAMS: 60 CAP</span>
                      </div>
                   </div>

                   {/* Stat 3 */}
                   <div className="stat-card flex items-center bg-white/10 rounded-xl p-4 border border-white/20 backdrop-blur-sm">
                      <div className="w-16 h-16 bg-[#0ea5e9] rounded-lg flex items-center justify-center shrink-0 shadow-lg">
                         <span className="text-white text-3xl font-black">₹75</span>
                      </div>
                      <div className="ml-4 flex flex-col">
                         <span className="text-white font-bold font-inter uppercase tracking-wide">Per Member</span>
                         <span className="text-gray-300 text-[10px] font-bold tracking-widest mt-1 uppercase">Fee Structure</span>
                      </div>
                   </div>
                </div>

                <Link to="/" className="stat-card group relative w-full flex justify-center items-center px-8 py-5 font-black text-white bg-gradient-to-r from-sih-orange to-[#ea580c] rounded-xl overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all hover:-translate-y-1">
                   <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                   <span className="relative text-xl tracking-widest uppercase">REGISTER NOW</span>
                </Link>
             </div>
          </div>

        </div>
      </section>

      <Metrics />
      <Organizers />

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
