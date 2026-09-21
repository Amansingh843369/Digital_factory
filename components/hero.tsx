// // "use client";

// // import { useState, useEffect } from "react";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import {
// //   ArrowRight,
// //   Cpu,
// //   Layers,
// //   CheckCircle,
// // } from "lucide-react";

// // // ================= CUSTOM TYPEWRITER HOOK =================
// // const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) => {
// //   const [text, setText] = useState("");
// //   const [isDeleting, setIsDeleting] = useState(false);
// //   const [loopNum, setLoopNum] = useState(0);

// //   useEffect(() => {
// //     const currentWord = words[loopNum % words.length];
// //     let timer: NodeJS.Timeout;

// //     if (isDeleting) {
// //       timer = setTimeout(() => {
// //         setText(currentWord.substring(0, text.length - 1));
// //         if (text === "") {
// //           setIsDeleting(false);
// //           setLoopNum(loopNum + 1);
// //         }
// //       }, deletingSpeed);
// //     } else {
// //       timer = setTimeout(() => {
// //         setText(currentWord.substring(0, text.length + 1));
// //         if (text === currentWord) {
// //           timer = setTimeout(() => setIsDeleting(true), pauseTime);
// //         }
// //       }, typingSpeed);
// //     }

// //     return () => clearTimeout(timer);
// //   }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

// //   return text;
// // };

// // // Animation Variants for Staggered Text
// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.15,
// //       delayChildren: 0.3,
// //     },
// //   },
// // };

// // const itemVariants = {
// //   hidden: { y: 40, opacity: 0 },
// //   visible: {
// //     y: 0,
// //     opacity: 1,
// //     transition: { type: "spring", stiffness: 50, damping: 20 },
// //   },
// // };

// // export function Hero() {
// //   const typeWriterText = useTypewriter([
// //     "Software Design ",
// //     "Website Design ",
// //     "Cyber Security ",
// //     "Pen Testing ",
// //   ]);

// //   return (
// //     <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-24">
      
// //       {/* BACKGROUND IMAGE LAYER (Responsive Reveal) */}
// //       <motion.div
// //         className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none"
// //         initial={{ clipPath: "inset(0 100% 0 0)" }}
// //         animate={{ clipPath: "inset(0 0% 0 0)" }}
// //         transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
// //       >
// //         <div className="relative h-full w-full lg:w-[45%] bg-gray-100 opacity-20 lg:opacity-100 transition-opacity">
// //           <Image
// //             src="/images/hero-workspace.png" 
// //             alt="Digital Factory Engineering Team"
// //             fill
// //             className="object-cover object-center"
// //             priority
// //           />
// //           {/* Mobile Overlay for guaranteed text readability on small screens */}
// //           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent lg:hidden" />
// //         </div>
// //       </motion.div>

// //       {/* CONTENT LAYER */}
// //       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
// //         <div className="w-full lg:w-[60%] xl:w-[55%]">
          
// //           <motion.div
// //             variants={containerVariants}
// //             initial="hidden"
// //             animate="visible"
// //             className="flex flex-col items-start"
// //           >
            
// //             {/* Badge */}
// //             <motion.div 
// //               variants={itemVariants} 
// //               className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-brand backdrop-blur-sm"
// //             >
// //               <Cpu className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse shrink-0" />
// //               <span>We are Software Engineer Team</span>
// //             </motion.div>

// //             {/* Headline */}
// //             <motion.h1 
// //               variants={itemVariants} 
// //               className="max-w-4xl font-display text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight text-foreground"
// //             >
// //               Digital Factory
// //               <br />
// //               <span className="inline-flex items-baseline whitespace-nowrap min-h-[1.2em]">
// //                 <span className="bg-gradient-to-r from-brand via-teal-400 to-indigo-500 bg-clip-text text-transparent">
// //                   {typeWriterText}
// //                 </span>
// //                 <span className="animate-pulse text-indigo-500 font-light">|</span>
// //               </span>
// //             </motion.h1>

// //             {/* Description Paragraphs */}
// //             <motion.p 
// //               variants={itemVariants} 
// //               className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground"
// //             >
// //               Digital Factory empowers businesses with expert engineering teams to design, build, and scale high-impact digital products.  
// //             </motion.p>
            
// //             <motion.p 
// //               variants={itemVariants} 
// //               className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground"
// //             >
// //               We transform complex challenges into secure, scalable, and high-performance solutions built for long-term growth.
// //             </motion.p>

// //             {/* Features Grid */}
// //             <motion.div 
// //               variants={itemVariants} 
// //               className="mt-6 sm:mt-8 grid w-full max-w-2xl gap-3 text-xs sm:text-sm font-medium text-foreground/80 grid-cols-1 sm:grid-cols-2"
// //             >
// //               <div className="flex items-center gap-2.5 sm:gap-3">
// //                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
// //                 <span>Custom Web & Mobile Apps</span>
// //               </div>
// //               <div className="flex items-center gap-2.5 sm:gap-3">
// //                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
// //                 <span>Cybersecurity & Pen Testing</span>
// //               </div>
// //               <div className="flex items-center gap-2.5 sm:gap-3">
// //                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
// //                 <span>AI & Automation Learning</span>
// //               </div>
// //               <div className="flex items-center gap-2.5 sm:gap-3">
// //                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
// //                 <span>UI/UX & Product Design</span>
// //               </div>
// //             </motion.div>

// //             {/* Buttons */}
// //             <motion.div 
// //               variants={itemVariants} 
// //               className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
// //             >
// //               <a
// //                 href="#contact"
// //                 className="group flex items-center justify-center gap-2 rounded-xl bg-brand px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/30 text-center"
// //               >
// //                 Get Started
// //                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// //               </a>
// //               <a
// //                 href="#services"
// //                 className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-muted/50 text-center"
// //               >
// //                 <Layers className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand" />
// //                 Explore Services
// //               </a>
// //             </motion.div>

// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Cpu,
//   Layers,
//   CheckCircle,
// } from "lucide-react";

// // ================= CUSTOM TYPEWRITER HOOK =================
// const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) => {
//   const [text, setText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);

//   useEffect(() => {
//     const currentWord = words[loopNum % words.length];
//     let timer;

//     if (isDeleting) {
//       timer = setTimeout(() => {
//         setText(currentWord.substring(0, text.length - 1));
//         if (text === "") {
//           setIsDeleting(false);
//           setLoopNum(loopNum + 1);
//         }
//       }, deletingSpeed);
//     } else {
//       timer = setTimeout(() => {
//         setText(currentWord.substring(0, text.length + 1));
//         if (text === currentWord) {
//           timer = setTimeout(() => setIsDeleting(true), pauseTime);
//         }
//       }, typingSpeed);
//     }

//     return () => clearTimeout(timer);
//   }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

//   return text;
// };

// // Animation Variants for Staggered Text
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 40, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 50, damping: 20 },
//   },
// };

// export function Hero() {
//   const typeWriterText = useTypewriter([
//     "Software Design ",
//     "Website Design ",
//     "Cyber Security ",
//     "Pen Testing ",
//   ]);

//   return (
//     <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-24">
      
//       {/* BACKGROUND VIDEO LAYER (Responsive Reveal) */}
//       <motion.div
//         className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none"
//         initial={{ clipPath: "inset(0 100% 0 0)" }}
//         animate={{ clipPath: "inset(0 0% 0 0)" }}
//         transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
//       >
//         <div className="relative h-full w-full lg:w-[45%] bg-gray-100 opacity-20 lg:opacity-100 transition-opacity">
//           {/* HTML5 Video Tag for Background Video */}
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 h-full w-full object-cover object-center"
//           >
//             {/* Make sure video.mp4 is inside your public folder */}
//             <source src="/videos.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           {/* Mobile Overlay for guaranteed text readability on small screens */}
//           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent lg:hidden" />
//         </div>
//       </motion.div>

//       {/* CONTENT LAYER */}
//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
//         <div className="w-full lg:w-[60%] xl:w-[55%]">
          
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="flex flex-col items-start"
//           >
            
//             {/* Badge */}
//             <motion.div 
//               variants={itemVariants} 
//               className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-brand backdrop-blur-sm"
//             >
//               <Cpu className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse shrink-0" />
//               <span>We are Software Engineer Team</span>
//             </motion.div>

//             {/* Headline */}
//             <motion.h1 
//               variants={itemVariants} 
//               className="max-w-4xl font-display text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight text-foreground"
//             >
//               Digital Factory
//               <br />
//               <span className="inline-flex items-baseline whitespace-nowrap min-h-[1.2em]">
//                 <span className="bg-gradient-to-r from-brand via-teal-400 to-indigo-500 bg-clip-text text-transparent">
//                   {typeWriterText}
//                 </span>
//                 <span className="animate-pulse text-indigo-500 font-light">|</span>
//               </span>
//             </motion.h1>

//             {/* Description Paragraphs */}
//             <motion.p 
//               variants={itemVariants} 
//               className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground"
//             >
//               Digital Factory empowers businesses with expert engineering teams to design, build, and scale high-impact digital products.  
//             </motion.p>
            
//             <motion.p 
//               variants={itemVariants} 
//               className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground"
//             >
//               We transform complex challenges into secure, scalable, and high-performance solutions built for long-term growth.
//             </motion.p>

//             {/* Features Grid */}
//             <motion.div 
//               variants={itemVariants} 
//               className="mt-6 sm:mt-8 grid w-full max-w-2xl gap-3 text-xs sm:text-sm font-medium text-foreground/80 grid-cols-1 sm:grid-cols-2"
//             >
//               <div className="flex items-center gap-2.5 sm:gap-3">
//                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
//                 <span>Custom Web & Mobile Apps</span>
//               </div>
//               <div className="flex items-center gap-2.5 sm:gap-3">
//                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
//                 <span>Cybersecurity & Pen Testing</span>
//               </div>
//               <div className="flex items-center gap-2.5 sm:gap-3">
//                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
//                 <span>AI & Automation Learning</span>
//               </div>
//               <div className="flex items-center gap-2.5 sm:gap-3">
//                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
//                 <span>UI/UX & Product Design</span>
//               </div>
//             </motion.div>

//             {/* Buttons */}
//             <motion.div 
//               variants={itemVariants} 
//               className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
//             >
//               <a
//                 href="#contact"
//                 className="group flex items-center justify-center gap-2 rounded-xl bg-brand px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/30 text-center"
//               >
//                 Get Started
//                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </a>
//               <a
//                 href="#services"
//                 className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-muted/50 text-center"
//               >
//                 <Layers className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand" />
//                 Explore Services
//               </a>
//             </motion.div>

//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


 "use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Layers,
  CheckCircle,
} from "lucide-react";

// ================= CUSTOM TYPEWRITER HOOK =================
const useTypewriter = (
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500
) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentWord = words[loopNum % words.length];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          timer = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    loopNum,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
};

// ================= ANIMATIONS =================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

export function Hero() {
  const typeWriterText = useTypewriter([
    "Software Design ",
    "Website Design ",
    "Cyber Security ",
    "Pen Testing ",
  ]);

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-24">

      {/* =====================================================
          SUBTLE BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        {/* Blue glow */}
        <div
          className="
            absolute
            -right-40
            top-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute
            right-[20%]
            bottom-[-150px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-indigo-500/10
            blur-[120px]
          "
        />

        {/* Brand glow */}
        <div
          className="
            absolute
            left-[-180px]
            top-[35%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-brand/5
            blur-[110px]
          "
        />
      </div>


      {/* =====================================================
          BACKGROUND VIDEO LAYER
      ====================================================== */}

      <motion.div
        className="
          absolute
          inset-0
          z-0
          flex
          items-center
          justify-end
          pointer-events-none
        "
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div
          className="
            relative
            h-full
            w-full
            lg:w-[45%]
            overflow-hidden
            bg-gray-100
            opacity-20
            lg:opacity-100
            transition-opacity
          "
        >

          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              scale-[1.02]
            "
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


          {/* Dark + Blue overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-l
              from-blue-950/10
              via-blue-950/20
              to-background/30
            "
          />


          {/* Blue / Purple cinematic glow */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-blue-500/10
              via-transparent
              to-indigo-600/25
              mix-blend-screen
            "
          />


          {/* Left fade — connects video with content */}
          <div
            className="
              absolute
              inset-y-0
              left-0
              w-32
              bg-gradient-to-r
              from-background
              via-background/50
              to-transparent
              lg:w-40
            "
          />


          {/* Bottom fade */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-32
              bg-gradient-to-t
              from-background/50
              to-transparent
            "
          />


          {/* Mobile Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-background
              via-background/80
              to-transparent
              lg:hidden
            "
          />

        </div>
      </motion.div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          -mt-10
          sm:-mt-16
          lg:-mt-20
        "
      >

        <div className="w-full lg:w-[60%] xl:w-[55%]">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >

            {/* =================================================
                BADGE
            ================================================= */}

            <motion.div
              variants={itemVariants}
              className="
                mb-4
                sm:mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-brand/20
                bg-brand/5
                px-3.5
                py-1.5
                text-[10px]
                sm:text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                sm:tracking-[0.2em]
                text-brand
                backdrop-blur-sm
                shadow-[0_0_25px_rgba(59,130,246,0.08)]
              "
            >
              <Cpu
                className="
                  h-3.5
                  w-3.5
                  sm:h-4
                  sm:w-4
                  animate-pulse
                  shrink-0
                "
              />

              <span>We are Software Engineer Team</span>
            </motion.div>


            {/* =================================================
                HEADLINE
            ================================================= */}

            <motion.h1
              variants={itemVariants}
              className="
                max-w-4xl
                font-display
                text-3xl
                sm:text-5xl
                md:text-6xl
                lg:text-6xl
                xl:text-7xl
                font-extrabold
                leading-[1.1]
                sm:leading-[1.05]
                tracking-tight
                text-foreground
              "
            >
              Digital Factory

              <br />

              <span
                className="
                  inline-flex
                  items-baseline
                  whitespace-nowrap
                  min-h-[1.2em]
                "
              >
                <span
                  className="
                    bg-gradient-to-r
                    from-brand
                    via-cyan-400
                    to-indigo-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {typeWriterText}
                </span>

                <span
                  className="
                    animate-pulse
                    text-indigo-500
                    font-light
                  "
                >
                  |
                </span>
              </span>
            </motion.h1>


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              variants={itemVariants}
              className="
                mt-4
                sm:mt-6
                max-w-2xl
                text-base
                sm:text-lg
                lg:text-xl
                leading-relaxed
                text-muted-foreground
              "
            >
              Digital Factory empowers businesses with expert engineering teams to design, build, and scale high-impact digital products.
            </motion.p>


            <motion.p
              variants={itemVariants}
              className="
                mt-3
                sm:mt-4
                max-w-2xl
                text-base
                sm:text-lg
                lg:text-xl
                leading-relaxed
                text-muted-foreground
              "
            >
              We transform complex challenges into secure, scalable, and high-performance solutions built for long-term growth.
            </motion.p>


            {/* =================================================
                FEATURES
            ================================================= */}

            <motion.div
              variants={itemVariants}
              className="
                mt-6
                sm:mt-8
                grid
                w-full
                max-w-2xl
                grid-cols-1
                gap-3
                text-xs
                sm:grid-cols-2
                sm:text-sm
                font-medium
                text-foreground/80
              "
            >

              <div className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
                <span>Custom Web & Mobile Apps</span>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
                <span>Cybersecurity & Pen Testing</span>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
                <span>AI & Automation Learning</span>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
                <span>UI/UX & Product Design</span>
              </div>

            </motion.div>


            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              variants={itemVariants}
              className="
                mt-8
                sm:mt-10
                flex
                w-full
                flex-col
                items-stretch
                gap-3.5
                sm:w-auto
                sm:flex-row
                sm:items-center
                sm:gap-4
              "
            >

              {/* ================= GET STARTED ================= */}

              <a
                href="#contact"
                className="
                  group
                  relative
                  isolate
                  flex
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-xl
                  p-[1px]
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_0_25px_rgba(59,130,246,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]
                "
              >

                {/* Animated glowing border */}
                <span
                  className="
                    absolute
                    inset-[-100%]
                    -z-10
                    animate-[spin_4s_linear_infinite]
                    bg-[conic-gradient(from_90deg,transparent_0%,#2563eb_20%,#06b6d4_35%,#7c3aed_50%,transparent_70%)]
                  "
                />

                {/* Inner button */}
                <span
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-[11px]
                    bg-[#111114]
                    px-6
                    py-3.5
                    sm:px-7
                    sm:py-4
                    transition-all
                    duration-300
                    group-hover:bg-[#17171c]
                  "
                >
                  Get Started

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>

              </a>


              {/* ================= EXPLORE SERVICES ================= */}

              <a
                href="#services"
                className="
                  group
                  relative
                  isolate
                  flex
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-xl
                  p-[1px]
                  text-sm
                  font-bold
                  text-foreground
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >

                {/* Animated border */}
                <span
                  className="
                    absolute
                    inset-[-100%]
                    -z-10
                    animate-[spin_6s_linear_infinite_reverse]
                    bg-[conic-gradient(from_90deg,transparent_0%,#2C1E16_18%,#2C1E16_92%,#7c3aed_48%,transparent_70%)]
                  "
                />

                {/* Inner */}
                <span
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-[11px]
                    border
                 
                    bg-background 
                    px-6
                    py-3.5
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    
                  "
                >

                  <Layers
                    className="
                      h-3
                      w-4
                      text-muted-foreground
                      
                      duration-300
                     
                    "
                  />

                  Explore Services

                </span>

              </a>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}