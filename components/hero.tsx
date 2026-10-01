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
const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) => {
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
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

// Animation Variants for Staggered Text
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
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

export function Hero() {
   const typeWriterText = useTypewriter([
    "Software Design ",
    "Website Design ",
    "Cyber Security ",
    "Penetration Testing ",
  ]);

  return (
    <section className="relative min-h-[90dvh] flex items-center overflow-hidden bg-background pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-0">
      
    
{/* ================= CURVED VIDEO ================= */}
<motion.div
  className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 1.4,
    ease: [0.76, 0, 0.24, 1],
  }}
>
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1920 900"
    preserveAspectRatio="none"
  >
    <defs>
      <clipPath id="curvedVideoClip">
        <path
          d="
            M 620 900

            C 680 850, 730 810, 800 770
            C 880 725, 930 690, 980 630
            C 1015 590, 1015 530, 1040 480
            C 1080 410, 1130 350, 1170 300
            C 1210 250, 1240 190, 1300 145
            C 1370 90, 1460 55, 1550 20
            C 1600 0, 1640 -10, 1680 -30

            L 1920 -30
            L 1920 900

            Z
          "
        />
      </clipPath>
    </defs>

    <foreignObject
      x="0"
      y="0"
      width="1920"
      height="900"
      clipPath="url(#curvedVideoClip)"
    >
      <div className="w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/homepage.mp4" type="video/mp4" />
        </video>
      </div>
    </foreignObject>
  </svg>

  {/* Mobile Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent lg:hidden" />
</motion.div>


       {/* CONTENT LAYER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full lg:w-[60%] xl:w-[55%]">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.h1
              variants={itemVariants}
              className="
                max-w-4xl
                font-display
                text-3xl
                sm:text-5xl
                md:text-6xl
                lg:text-5xl
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
                    lg:text-6xl
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
                sm:mt-6
                max-w-2xl
                text-base
                sm:text-lg
                lg:text-xl
                leading-relaxed
                text-justify
                text-muted-foreground
              "
            >
              We transform complex challenges into secure, scalable, and <br className="hidden lg:block" /> high-performance solutions built for long-term growth.
            </motion.p>
      
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