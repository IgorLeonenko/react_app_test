"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop"
          alt="Cyberpunk cityscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-10"></div>
        
        {/* Grid overlay effect */}
        <div 
          className="absolute inset-0 z-20 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 45, 85, 0.3) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255, 45, 85, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          <span className="block glitch-effect neon-text" data-text="BRIDGE OF SINNERS">
            BRIDGE OF SINNERS
          </span>
          <span className="block text-2xl md:text-3xl mt-4 font-light neon-text-blue">
            DARK SYNTHWAVE | CYBERPUNK
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Immerse yourself in the dystopian soundscapes of tomorrow. 
          Experience the fusion of retro synths and futuristic beats.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/music" 
            className="neon-border px-8 py-4 rounded-md text-white text-lg font-medium transition-all duration-300 hover:bg-[#ff2d55]/20"
          >
            Explore Music
          </Link>
          <Link 
            href="/contact" 
            className="neon-border-blue px-8 py-4 rounded-md text-white text-lg font-medium transition-all duration-300 hover:bg-[#00f2ff]/20"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Animated scanline effect */}
      <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
        <div className="scanline"></div>
        <style jsx>{`
          .scanline {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: rgba(255, 45, 85, 0.3);
            opacity: 0.3;
            animation: scanline 6s linear infinite;
          }
          
          @keyframes scanline {
            0% {
              transform: translateY(-100vh);
            }
            100% {
              transform: translateY(100vh);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Hero;
