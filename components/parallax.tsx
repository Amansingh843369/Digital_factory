// pages/index.js ya app/page.jsx (Next.js App Router)
import React from 'react';

export default function ParallaxPage() {
  return (
    <main>
 

      {/* Parallax Section */}
      <section 
        className="h-80 w-full bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{ 
          // Yahan apni pasand ki image ka URL daalein
          backgroundImage: "url('https://www.spicex.com/wp-content/uploads/2023/07/digital-transformation.webp)", 
        }}
      >
         
      </section>
 
    </main>
  );
}