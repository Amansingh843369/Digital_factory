// pages/index.js ya app/page.jsx (Next.js App Router)
import React from 'react';

export default function ParallaxPage() {
  return (
    <main>
 

     <section className="relative h-80 w-full flex items-center justify-center overflow-hidden">
  
  {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/homepage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     

</section>
 
    </main>
  );
}