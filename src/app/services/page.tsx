"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Live Performance",
    description: "Immersive live shows featuring a full cyberpunk visual experience alongside dark synthwave music that will transport your audience to a dystopian future.",
    features: [
      "Full audio-visual experience",
      "Custom lighting and visuals",
      "Adaptable set length (45-120 minutes)",
      "Optional interactive elements",
      "Technical rider provided"
    ],
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop",
    price: "Starting at $1,500",
    color: "neon-text"
  },
  {
    id: 2,
    title: "Session Musician",
    description: "Professional synth and electronic music production for your project, bringing the unique Bridge of Sinners sound to your compositions.",
    features: [
      "Custom synth programming",
      "Analog and digital synthesis",
      "Arpeggiator and sequence creation",
      "Atmospheric sound design",
      "Remote or in-studio sessions available"
    ],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
    price: "Starting at $75/hour",
    color: "neon-text-blue"
  },
  {
    id: 3,
    title: "Mixing & Mastering",
    description: "Professional audio engineering services to give your tracks the polished, cinematic sound that defines the dark synthwave genre.",
    features: [
      "Detailed mix engineering",
      "Mastering for all platforms",
      "Stem mixing available",
      "Analog hardware processing",
      "Two rounds of revisions included"
    ],
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2070&auto=format&fit=crop",
    price: "Starting at $350/track",
    color: "neon-text-purple"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Services Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
              alt="Studio equipment"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text">SERVICES</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional audio services for your projects and events
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
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
            <div className="space-y-32">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative">
                      <div className={`aspect-video rounded-lg overflow-hidden ${
                        service.id === 1 ? 'neon-border' : 
                        service.id === 2 ? 'neon-border-blue' : 'neon-border-purple'
                      }`}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={800}
                          height={450}
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800 z-10">
                        <div className="text-center">
                          <p className={`text-sm mb-1 ${
                            service.id === 1 ? 'text-[#ff2d55]' : 
                            service.id === 2 ? 'text-[#00f2ff]' : 'text-[#9d00ff]'
                          }`}>PRICING</p>
                          <p className={`text-xl font-bold ${service.color}`}>{service.price}</p>
                          <p className="text-gray-400 text-sm mt-2">Custom quotes available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className={`text-3xl font-bold mb-4 ${service.color}`}>{service.title}</h2>
                    <p className="text-gray-300 mb-8">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">What's Included:</h3>
                      {service.features.map((feature, i) => (
                        <div 
                          key={i} 
                          className="flex items-start p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-md hover:border-gray-700 transition-colors duration-300"
                        >
                          <div className={`w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full mr-3 ${
                            service.id === 1 ? 'bg-[#ff2d55]/20' : 
                            service.id === 2 ? 'bg-[#00f2ff]/20' : 'bg-[#9d00ff]/20'
                          }`}>
                            <svg 
                              className={`h-4 w-4 ${
                                service.id === 1 ? 'text-[#ff2d55]' : 
                                service.id === 2 ? 'text-[#00f2ff]' : 'text-[#9d00ff]'
                              }`} 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-white">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href="/contact" 
                      className={`${
                        service.id === 1 ? 'neon-border' : 
                        service.id === 2 ? 'neon-border-blue' : 'neon-border-purple'
                      } px-8 py-4 rounded-md text-white text-lg font-medium transition-all duration-300 hover:bg-opacity-20 inline-block`}
                      style={{
                        backgroundColor: service.id === 1 ? 'rgba(255, 45, 85, 0.1)' : 
                                         service.id === 2 ? 'rgba(0, 242, 255, 0.1)' : 
                                         'rgba(157, 0, 255, 0.1)'
                      }}
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-gray-900/30 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(157, 0, 255, 0.3) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(157, 0, 255, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 neon-text-purple">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about working with Bridge of Sinners
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#9d00ff]/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-3">How far in advance should I book?</h3>
                <p className="text-gray-300">
                  For live performances, it's recommended to book at least 8-12 weeks in advance. 
                  For session work and mixing/mastering, 2-4 weeks of lead time is typically sufficient, 
                  though this can vary depending on current workload.
                </p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#ff2d55]/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-3">What equipment do you use?</h3>
                <p className="text-gray-300">
                  Bridge of Sinners utilizes a combination of vintage analog synthesizers (Moog, Roland, Oberheim) 
                  and modern digital tools. For mixing and mastering, we use industry-standard DAWs with 
                  high-end plugins and select analog hardware for character and warmth.
                </p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#00f2ff]/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer remote collaboration?</h3>
                <p className="text-gray-300">
                  Yes! All services can be provided remotely. For session work, files can be exchanged via 
                  secure cloud services. For mixing and mastering, we offer video calls to discuss the project 
                  and provide feedback during the process.
                </p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#9d00ff]/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-3">What is your revision policy?</h3>
                <p className="text-gray-300">
                  All mixing and mastering services include two rounds of revisions. Additional revisions 
                  can be arranged at an hourly rate. For session work, we work until you're satisfied with 
                  the tracks provided, within reasonable scope of the original project brief.
                </p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#ff2d55]/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer custom packages?</h3>
                <p className="text-gray-300">
                  Absolutely! We understand that every project is unique. Custom packages combining 
                  multiple services can be arranged, often at a discounted rate. Contact us with your 
                  specific needs for a tailored quote.
                </p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#00f2ff]/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-3">What genres do you work with?</h3>
                <p className="text-gray-300">
                  While specializing in dark synthwave and cyberpunk music, Bridge of Sinners also works 
                  with adjacent genres including synthpop, retrowave, darkwave, industrial, and electronic 
                  film scores. We're open to experimental projects that push genre boundaries.
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
                <h2 className="text-3xl font-bold mb-6 neon-text-purple">READY TO WORK TOGETHER?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Get in touch to discuss your project needs and how Bridge of Sinners can help bring your vision to life.
                </p>
                <Link 
                  href="/contact" 
                  className="neon-border-purple px-8 py-4 rounded-md text-white text-lg font-medium transition-all duration-300 hover:bg-[#9d00ff]/20 inline-block"
                >
                  Contact Now
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
