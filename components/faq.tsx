"use client";

import { useState } from "react";
import { MessageSquare, Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What does the collaboration process look like?",
    answer: "We start with discovery sessions to understand your goals and challenges. From there, we design a custom strategy, maintain open communication through regular check-ins, and iterate based on your feedback to ensure the final product exceeds expectations."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A standard website might take 4-6 weeks, while a complex web application could take 3-4 months. We provide a detailed timeline during the proposal phase."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes security updates, performance monitoring, regular backups, and feature enhancements to keep your digital assets running smoothly."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our team specializes in modern web technologies including React, Next.js, Tailwind CSS, Node.js, and various cloud infrastructures. We choose the best tech stack tailored specifically to your project's performance and scalability needs."
  }
];

export function FAQSection() {
  // State to track which index is currently open. 
  // null means nothing is open initially.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to handle opening an item
  const handleOpen = (index: number) => {
    setOpenIndex(index);
  };

  // Function to handle closing an item (only for mobile click logic if needed, 
  // but for desktop hover, we just let it close naturally or switch)
  const handleClose = () => {
    setOpenIndex(null);
  };

  return (
    <section id="faq" className="bg-[#FAFAFA] py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-3xl">
        
        {/* ================= HEADER ================= */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white shadow-sm">
            <MessageSquare className="h-4 w-4" />
            FAQs
          </div>
          
          <h2 className="mb-4 font-sans text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl">
            Questions & Answers
          </h2>
          
          <p className="text-lg text-neutral-600">
            Key information to help you make confident decisions.
          </p>
        </div>

        {/* ================= FAQ ACCORDION ================= */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                // Desktop: Mouse Enter se open, Mouse Leave se close
                onMouseEnter={() => handleOpen(index)}
                onMouseLeave={() => handleClose()}
                
                // Mobile/Tablet: Click se toggle (agar already open hai toh band, nahi toh open)
                onClick={() => {
                  // Mobile par hover behavior ko override karke proper toggle dena better UX hai
                  // Lekin kyunki tumne kaha "hover out pe normal", 
                  // Mobile pe hum click ko toggle maanenge.
                  if (isOpen) {
                    handleClose();
                  } else {
                    handleOpen(index);
                  }
                }}
                className={`group cursor-pointer rounded-2xl border bg-white transition-all duration-300 ease-in-out ${
                  isOpen 
                    ? "border-neutral-300 shadow-md ring-1 ring-neutral-200" 
                    : "border-neutral-200 hover:border-neutral-300 hover:shadow-sm"
                }`}
              >
                {/* Question Row */}
                <div className="flex items-center justify-between p-6 sm:px-8">
                  <h3 className={`text-lg transition-colors duration-300 ${isOpen ? "text-neutral-900 font-semibold" : "text-neutral-700 font-normal group-hover:text-neutral-900"}`}>
                    {faq.question}
                  </h3>
                  
                  <div className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-neutral-900 rotate-90" : "bg-neutral-100 group-hover:bg-neutral-200"}`}>
                    {isOpen ? (
                      <X className="h-5 w-5 text-white" />
                    ) : (
                      <Plus className="h-5 w-5 text-neutral-600" />
                    )}
                  </div>
                </div>
                
                {/* Answer Content (Animated using CSS Grid) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 text-base leading-relaxed text-neutral-600 sm:px-8 sm:pb-8">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}