"use client";

import { useState } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        service: "",
        message: ""
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background grid effect */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 45, 85, 0.3) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 45, 85, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
            BOOK NOW
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate? Fill out the form below to book Bridge of Sinners for your next project or event.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 p-8">
            {submitted ? (
              <div className="text-center py-8">
                <svg 
                  className="h-16 w-16 text-[#ff2d55] mx-auto mb-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2 neon-text">
                  Message Sent!
                </h3>
                <p className="text-gray-300 mb-6">
                  Thank you for your inquiry. Bridge of Sinners will get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2d55] focus:border-transparent text-white"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2d55] focus:border-transparent text-white"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2d55] focus:border-transparent text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="live-shows">Live Shows</option>
                    <option value="session-musician">Session Musician</option>
                    <option value="mixing-mastering">Mixing & Mastering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2d55] focus:border-transparent text-white"
                    placeholder="Tell us about your project or event"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full neon-border px-6 py-4 rounded-md text-white text-lg font-medium transition-all duration-300 hover:bg-[#ff2d55]/20 flex justify-center items-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 p-6 text-center">
              <svg className="h-8 w-8 text-[#ff2d55] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">
                <a href="mailto:contact@bridgeofsinners.com" className="hover:text-[#ff2d55] transition-colors duration-300">
                  contact@bridgeofsinners.com
                </a>
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 p-6 text-center">
              <svg className="h-8 w-8 text-[#00f2ff] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-400">
                Based in Los Angeles, CA<br />
                Available for worldwide bookings
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 p-6 text-center">
              <svg className="h-8 w-8 text-[#9d00ff] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
              <p className="text-gray-400">
                Usually within 48 hours<br />
                Urgent requests prioritized
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
