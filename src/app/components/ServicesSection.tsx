"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    id: "live-shows",
    title: "Live Shows",
    description: "Book Bridge of Sinners for your venue, festival, or private event. Experience the full cyberpunk atmosphere with immersive visuals and powerful live performance.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Full audio-visual experience",
      "Custom light show",
      "Adaptable set length (45-120 minutes)",
      "Optional DJ set before/after performance",
      "Technical rider provided"
    ]
  },
  {
    id: "session-musician",
    title: "Session Musician",
    description: "Need dark synthwave elements for your track? Bridge of Sinners offers remote session work for producers, bands, and solo artists looking to add cyberpunk flavor.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Analog and digital synth programming",
      "Custom sound design",
      "Atmospheric textures and pads",
      "Arpeggiated sequences",
      "Fast turnaround times"
    ]
  },
  {
    id: "mixing-mastering",
    title: "Mixing & Mastering",
    description: "Professional mixing and mastering services specialized in electronic music, particularly synthwave, darkwave, and cyberpunk genres.",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Detailed mix consultation",
      "Genre-specific processing techniques",
      "Stem mixing available",
      "Analog and digital processing",
      "Revisions included"
    ]
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background grid effect */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(157, 0, 255, 0.3) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(157, 0, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text-purple">
            SERVICES
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Book Bridge of Sinners for your next project or event. Offering professional services 
            tailored to your specific needs.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Service Tabs */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`w-full text-left p-4 border-b border-gray-800 last:border-b-0 transition-colors duration-300 ${
                    activeService === service.id 
                      ? 'bg-[#9d00ff]/20 border-l-4 border-l-[#9d00ff]' 
                      : 'hover:bg-gray-800/50'
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <h3 className={`text-xl font-bold ${
                    activeService === service.id ? 'text-[#9d00ff]' : 'text-white'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-1">
                    {service.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
          
          {/* Service Details */}
          {services.map((service) => (
            <div 
              key={service.id}
              className={`w-full lg:w-2/3 ${activeService === service.id ? 'block' : 'hidden'}`}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 h-full">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-bold text-white neon-text-purple">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg 
                            className="h-5 w-5 text-[#9d00ff] mt-0.5 mr-2" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/contact" 
                    className="neon-border-purple px-6 py-3 rounded-md text-white text-lg font-medium transition-all duration-300 hover:bg-[#9d00ff]/20 inline-block"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
