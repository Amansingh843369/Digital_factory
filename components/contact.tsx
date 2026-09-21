import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full bg-[#FAF7F2] py-16 lg:py-15">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: FORM ================= */}
          <div className="flex flex-col justify-center">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              
              {/* TOP LABEL */}
              <span className="mb-4 block text-[13px] font-bold uppercase tracking-wider text-[#C46A42]">
                Start Your Project
              </span>

              {/* HEADING */}
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:text-[52px]">
                Tell us what you want to build or innovate
              </h2>
              <p className="mt-5 max-w-lg text-[17px] text-neutral-600">
                Share your project details and we'll get back with next steps, timeline and estimate guidance.
              </p>

              {/* FORM FIELDS */}
              <form className="mt-10 space-y-6">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-neutral-800">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full rounded-2xl bg-[#F0EBE1] px-5 py-4.5 text-neutral-800 placeholder-neutral-400 outline-none transition-all focus:ring-2 focus:ring-[#C46A42]/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-neutral-800">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-2xl bg-[#F0EBE1] px-5 py-4.5 text-neutral-800 outline-none transition-all focus:ring-2 focus:ring-[#C46A42]/40"
                    />
                  </div>
                </div>

                {/* Row 2: Project Type & Budget */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="project-type" className="text-sm font-semibold text-neutral-800">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        id="project-type"
                        defaultValue=""
                        className="w-full appearance-none rounded-2xl bg-[#F0EBE1] px-5 py-4.5 pr-12 text-neutral-500 outline-none transition-all cursor-pointer focus:ring-2 focus:ring-[#C46A42]/40"
                      >
                        <option value="" disabled>Select...</option>
                        <option value="web-designing">Web Designing</option>
                        <option value="custom-software">Custom Software</option>
                        <option value="software-testing">Software Testing</option>
                        <option value="saas-development">SaaS Development</option>
                        <option value="mobile-apps">Mobile Apps</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                        <ChevronDown className="h-5 w-5 text-neutral-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-semibold text-neutral-800">
                      Estimated Budget
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        defaultValue=""
                        className="w-full appearance-none rounded-2xl bg-[#F0EBE1] px-5 py-4.5 pr-12 text-neutral-500 outline-none transition-all cursor-pointer focus:ring-2 focus:ring-[#C46A42]/40"
                      >
                        <option value="" disabled>Select...</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                        <ChevronDown className="h-5 w-5 text-neutral-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-neutral-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full resize-none rounded-2xl bg-[#F0EBE1] px-5 py-4.5 text-neutral-800 placeholder-neutral-400 outline-none transition-all focus:ring-2 focus:ring-[#C46A42]/40"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#C46A42] py-4.5 text-[16px] font-semibold text-white transition-colors duration-300 hover:bg-[#A95A37] focus:outline-none focus:ring-2 focus:ring-[#C46A42] focus:ring-offset-2 focus:ring-offset-[#FAF7F2]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: IMAGE ================= */}
         <div className="relative h-full min-h-[500px] w-full lg:min-h-[750px] animate-in fade-in slide-in-from-right-8 duration-1000">
  {/* Map Container */}
  <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-[#E5D7CD] shadow-lg bg-[#F7F3E8]">
    
    {/* Live Google Map iFrame */}
    <iframe
      title="Mumbai Office Location"
      src="https://maps.google.com/maps?q=912+72+Corp+Saki+Vihar+Road+Sakinaka+Junction+Andheri+Mumbai+400072&t=&z=16&ie=UTF8&iwloc=&output=embed"
      className="h-full w-full border-0 grayscale-[15%] contrast-[105%] hover:grayscale-0 transition-all duration-500"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

    {/* Floating Glassmorphism Location Card */}
    <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-[#E5D7CD] shadow-xl z-10 space-y-3">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-[#A64B2A]/10 text-[#A64B2A] shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#2C1E16]">Mumbai HQ</h4>
          <p className="text-xs text-[#6B5D56] leading-relaxed mt-0.5">
            912, 72 Corp, Saki Vihar Rd, Sakinaka Junction, Andheri, Mumbai - 400072
          </p>
        </div>
      </div>

      <a
        href="https://www.google.com/maps/search/?api=1&query=912+72+Corp+Saki+Vihar+Road+Sakinaka+Junction+Andheri+Mumbai+400072"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#A64B2A] hover:bg-[#8C3E22] text-white text-xs font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
      >
        <span>Open in Google Maps</span>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
}