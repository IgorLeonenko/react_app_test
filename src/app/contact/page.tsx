"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    
    try {
      // Send data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        service: "",
        message: ""
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Contact Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop"
              alt="Contact background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text-purple">CONTACT</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch to book Bridge of Sinners for your next project or event
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(157, 0, 255, 0.3) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(157, 0, 255, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 neon-text-purple">GET IN TOUCH</h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form below to inquire about booking Bridge of Sinners for your project or event. 
                  We'll get back to you within 48 hours to discuss your needs in detail.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#9d00ff]/20 rounded-full mr-4">
                      <svg className="h-5 w-5 text-[#9d00ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">contact@bridgeofsinners.com</p>
                      <p className="text-gray-400 text-sm mt-1">For general inquiries and bookings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#ff2d55]/20 rounded-full mr-4">
                      <svg className="h-5 w-5 text-[#ff2d55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-400 text-sm mt-1">Mon-Fri, 10am-6pm PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#00f2ff]/20 rounded-full mr-4">
                      <svg className="h-5 w-5 text-[#00f2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Location</h3>
                      <p className="text-gray-300">Los Angeles, CA</p>
                      <p className="text-gray-400 text-sm mt-1">Available for remote work and travel</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">General Inquiries</span>
                      <span className="text-[#00f2ff]">24-48 hours</span>
                    </div>
                    <div className="h-px bg-gray-800"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Booking Requests</span>
                      <span className="text-[#ff2d55]">48-72 hours</span>
                    </div>
                    <div className="h-px bg-gray-800"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Urgent Matters</span>
                      <span className="text-[#9d00ff]">Same day</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#9d00ff]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="h-8 w-8 text-[#9d00ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out. We'll get back to you within 48 hours to discuss your project.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="neon-border-purple px-6 py-3 rounded-md text-white font-medium transition-all duration-300 hover:bg-[#9d00ff]/20"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Book Now</h3>
                    
                    {error && (
                      <div className="bg-[#ff2d55]/10 border border-[#ff2d55]/30 text-[#ff2d55] px-4 py-3 rounded-md">
                        {error}
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#9d00ff]/50 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#9d00ff]/50 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-gray-300 mb-2">Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#9d00ff]/50 focus:border-transparent"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="live-performance">Live Performance</option>
                        <option value="session-musician">Session Musician</option>
                        <option value="mixing-mastering">Mixing & Mastering</option>
                        <option value="custom-music">Custom Music</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-black/50 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#9d00ff]/50 focus:border-transparent"
                        placeholder="Tell us about your project or event..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full neon-border-purple px-6 py-4 rounded-md text-white font-medium transition-all duration-300 hover:bg-[#9d00ff]/20 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
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
              <h2 className="text-3xl font-bold mb-6 neon-text-blue">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about booking and working with Bridge of Sinners
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#00f2ff]/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-3">What information do you need for a booking?</h3>
                <p className="text-gray-300">
                  For bookings, we need details about the date, venue, expected audience size, 
                  technical requirements, and your budget. The more information you provide, 
                  the more accurate our quote will be.
                </p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#ff2d55]/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Do you require a deposit?</h3>
                <p className="text-gray-300">
                  Yes, we typically require a 50% non-refundable deposit to secure your booking date. 
                  The remaining balance is due one week before the event or upon delivery of the final 
                  product for studio services.
                </p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#9d00ff]/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Can you travel for performances?</h3>
                <p className="text-gray-300">
                  Yes, Bridge of Sinners is available for performances worldwide. Travel and 
                  accommodation expenses will be added to the booking fee for locations outside 
                  of the Los Angeles area.
                </p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#00f2ff]/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-3">What is your cancellation policy?</h3>
                <p className="text-gray-300">
                  Cancellations made more than 30 days before the event date may be eligible for a 
                  partial refund of the deposit. Cancellations within 30 days of the event are not 
                  eligible for a refund of the deposit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
