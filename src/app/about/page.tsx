"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* About Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=2070&auto=format&fit=crop"
              alt="Artist in studio"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text">ABOUT</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The story behind Bridge of Sinners and the dark synthwave revolution
              </p>
            </div>
          </div>
        </section>

        {/* Artist Bio Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 45, 85, 0.3) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255, 45, 85, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden neon-border">
                  <Image
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop"
                    alt="Bridge of Sinners"
                    width={600}
                    height={750}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-[#ff2d55]/30 z-10">
                  <div className="text-center">
                    <p className="text-[#ff2d55] text-sm mb-1">ESTABLISHED</p>
                    <p className="text-3xl font-bold neon-text">2020</p>
                    <p className="text-gray-400 text-sm mt-2">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 neon-text">THE ARTIST</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Bridge of Sinners emerged from the neon-lit underground of Los Angeles in 2020, 
                    creating a unique blend of dark synthwave and cyberpunk music that transports 
                    listeners to a dystopian future where technology and humanity collide.
                  </p>
                  <p>
                    Drawing inspiration from classic 80s synth pioneers, cyberpunk literature, and 
                    the gritty aesthetics of dystopian cinema, Bridge of Sinners crafts immersive 
                    soundscapes that tell stories of digital rebellion, technological anxiety, and 
                    human connection in an increasingly disconnected world.
                  </p>
                  <p>
                    With a background in classical composition and electronic music production, 
                    Bridge of Sinners brings technical precision and emotional depth to every track, 
                    combining vintage analog synths with cutting-edge production techniques to create 
                    a sound that is both nostalgic and futuristic.
                  </p>
                  <p>
                    Since debuting with the EP "Chrome Horizons" in 2020, Bridge of Sinners has 
                    performed at underground clubs, tech conferences, and cyberpunk-themed events 
                    across the country, building a dedicated following of synthwave enthusiasts and 
                    digital dreamers.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
                    <p className="text-[#00f2ff] text-sm mb-1">INFLUENCES</p>
                    <p className="text-gray-300">Vangelis, Tangerine Dream, John Carpenter, Perturbator, Kavinsky</p>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
                    <p className="text-[#9d00ff] text-sm mb-1">EQUIPMENT</p>
                    <p className="text-gray-300">Moog, Roland Jupiter-8, Oberheim OB-Xa, Yamaha DX7, Ableton Live</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="py-20 bg-gray-900/30 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 242, 255, 0.3) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(0, 242, 255, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 neon-text-blue">PHILOSOPHY</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The core beliefs that drive the sound and vision of Bridge of Sinners
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#00f2ff]/50 transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-[#00f2ff]/20 rounded-full mb-4">
                  <svg className="w-6 h-6 text-[#00f2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Technological Duality</h3>
                <p className="text-gray-300">
                  Exploring the balance between technology as both savior and destroyer, 
                  Bridge of Sinners creates music that examines our complex relationship 
                  with the digital world.
                </p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#ff2d55]/50 transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-[#ff2d55]/20 rounded-full mb-4">
                  <svg className="w-6 h-6 text-[#ff2d55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Emotional Resonance</h3>
                <p className="text-gray-300">
                  Despite the digital and synthetic nature of the instruments, every 
                  composition aims to evoke genuine human emotion, creating a bridge 
                  between the mechanical and the organic.
                </p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#9d00ff]/50 transition-colors duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-[#9d00ff]/20 rounded-full mb-4">
                  <svg className="w-6 h-6 text-[#9d00ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Retro-Futurism</h3>
                <p className="text-gray-300">
                  Blending nostalgic sounds of the past with forward-thinking production, 
                  Bridge of Sinners creates a timeless sound that honors the pioneers of 
                  electronic music while pushing the boundaries of the genre.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6 neon-text-purple">READY TO COLLABORATE?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Book Bridge of Sinners for your next project or event and bring the dark synthwave experience to your audience.
                </p>
                <Link 
                  href="/contact" 
                  className="neon-border-purple px-8 py-4 rounded-md text-white text-lg font-medium transition-all duration-300 hover:bg-[#9d00ff]/20 inline-block"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
