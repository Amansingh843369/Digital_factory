import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full bg-[#FAF7F2] py-16 lg:py-24">
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
              </form>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: IMAGE ================= */}
          <div className="relative h-full min-h-[500px] w-full lg:min-h-[750px] animate-in fade-in slide-in-from-right-8 duration-1000">
            {/* Image Container with precise rounded corners like the reference */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/tech-office.jpg" /* Replace with your image path */
                alt="Workspace Environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}