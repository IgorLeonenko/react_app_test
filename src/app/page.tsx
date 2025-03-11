"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MusicSection from "./components/MusicSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <MusicSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
