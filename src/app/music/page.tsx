"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Album {
  id: number;
  title: string;
  year: string;
  cover: string;
  description: string;
  tracks: Track[];
}

interface Track {
  id: number;
  title: string;
  duration: string;
}

const albums: Album[] = [
  {
    id: 1,
    title: "Neon Dystopia",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1000&auto=format&fit=crop",
    description: "A journey through the dark streets of a cyberpunk future, exploring themes of technological isolation and digital rebellion.",
    tracks: [
      { id: 1, title: "Digital Dawn", duration: "4:32" },
      { id: 2, title: "Neon Streets", duration: "5:17" },
      { id: 3, title: "Chrome Hearts", duration: "3:45" },
      { id: 4, title: "Synthetic Dreams", duration: "6:03" },
      { id: 5, title: "The Last Human", duration: "4:58" }
    ]
  },
  {
    id: 2,
    title: "Digital Dreams",
    year: "2023",
    cover: "https://images.unsplash.com/photo-1633107308636-70de0c3a1e2c?q=80&w=1000&auto=format&fit=crop",
    description: "Synthwave melodies meet dystopian atmospheres in this exploration of the boundary between reality and virtual existence.",
    tracks: [
      { id: 1, title: "Binary Sunset", duration: "3:45" },
      { id: 2, title: "Memory Implant", duration: "4:21" },
      { id: 3, title: "Virtual Escape", duration: "5:37" },
      { id: 4, title: "Neural Network", duration: "4:12" },
      { id: 5, title: "Holographic Love", duration: "6:24" }
    ]
  },
  {
    id: 3,
    title: "Chrome Horizons",
    year: "2022",
    cover: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=1000&auto=format&fit=crop",
    description: "The debut EP that established Bridge of Sinners' signature sound, blending retro synth textures with futuristic beats.",
    tracks: [
      { id: 1, title: "First Connection", duration: "4:05" },
      { id: 2, title: "Analog Memories", duration: "3:52" },
      { id: 3, title: "Cybernetic Heart", duration: "5:18" },
      { id: 4, title: "Data Corruption", duration: "4:47" },
      { id: 5, title: "System Reboot", duration: "6:33" }
    ]
  }
];

export default function Music() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Music Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop"
              alt="Music studio"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text-blue">MUSIC</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore the sonic landscapes of Bridge of Sinners
              </p>
            </div>
          </div>
        </section>

        {/* Albums Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 242, 255, 0.3) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(0, 242, 255, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-24">
              {albums.map((album) => (
                <div key={album.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className="relative">
                    <div className="aspect-square rounded-lg overflow-hidden neon-border-blue">
                      <Image
                        src={album.cover}
                        alt={album.title}
                        width={600}
                        height={600}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-[#00f2ff]/30 z-10">
                      <div className="text-center">
                        <p className="text-[#00f2ff] text-sm mb-1">RELEASED</p>
                        <p className="text-3xl font-bold neon-text-blue">{album.year}</p>
                        <p className="text-gray-400 text-sm mt-2">{album.tracks.length} Tracks</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold mb-4 neon-text-blue">{album.title}</h2>
                    <p className="text-gray-300 mb-8">{album.description}</p>
                    
                    <div className="space-y-2 mb-8">
                      {album.tracks.map((track) => (
                        <div 
                          key={track.id} 
                          className="flex justify-between items-center p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-md hover:border-[#00f2ff]/50 transition-colors duration-300"
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center bg-[#00f2ff]/20 rounded-full mr-3">
                              <span className="text-[#00f2ff] text-sm">{track.id}</span>
                            </div>
                            <span className="text-white">{track.title}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-400 mr-4">{track.duration}</span>
                            <button className="text-gray-400 hover:text-[#00f2ff] transition-colors duration-300">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href="#" 
                        className="flex items-center gap-2 text-gray-400 hover:text-[#00f2ff] transition-colors duration-300"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        Spotify
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center gap-2 text-gray-400 hover:text-[#ff2d55] transition-colors duration-300"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" />
                        </svg>
                        YouTube
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center gap-2 text-gray-400 hover:text-[#9d00ff] transition-colors duration-300"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.075.075.135.149.135.075 0 .135-.06.15-.135l.24-2.544-.24-2.64c-.015-.06-.075-.135-.149-.135m1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c.005.09.075.157.159.157.074 0 .158-.061.158-.151l.227-2.563-.227-2.444m.824-.44c-.09 0-.18.089-.18.179l-.205 2.669.205 2.669c0 .09.09.164.18.164.09 0 .168-.089.168-.179l.217-2.654-.217-2.669c0-.09-.078-.179-.168-.179m.944-.089c-.104 0-.187.09-.187.194l-.18 2.743.18 2.744c0 .104.083.194.187.194.103 0 .186-.09.186-.194l.204-2.744-.204-2.743c0-.104-.082-.194-.186-.194m2.766.748c-.15-.074-.301-.074-.451 0-.44.196-.863.484-1.207.784-1.118.988-1.8 2.34-1.91 3.798-.105 1.394.75 2.804 1.936 3.735.44.346.946.598 1.486.75.15.045.27-.044.27-.179v-7.5c0-.09-.061-.164-.135-.179m1.557 0c-.005 0-.015 0-.03 0-.09.006-.149.074-.149.164v7.56c0 .09.06.164.149.164.09 0 .164-.061.164-.164V12.61h.104c.554 0 1.093-.045 1.613-.12.257-.03.494-.09.72-.194.211-.09.404-.194.585-.33.574-.449.944-1.094.944-1.858 0-.54-.196-1.05-.54-1.425-.329-.374-.824-.644-1.395-.704-.12-.016-.24-.016-.36-.016-1.2 0-2.235.6-2.805 1.515-.044.061-.089.12-.135.195-1.486 2.115-1.47 4.904.045 6.934.06.075.119.15.18.224.149.18.329.345.509.51.179.149.36.285.54.42.09.075.18.135.271.195.165.105.329.21.509.285.9.045.194.09.299.135.486.181.989.285 1.529.285.135 0 .27-.006.405-.015.704-.046 1.358-.271 1.883-.66.104-.075.209-.156.299-.24.09-.075.165-.165.24-.255.196-.224.329-.494.465-.75.045-.105.09-.21.134-.315.015-.044.045-.074.045-.119.016-.06 0-.105-.059-.135-1.979-1.199-1.979-3.553.405-4.678.135-.063.27-.118.405-.18-.015 0-.031-.016-.046-.03-.044-.03-.104-.045-.149-.074-.12-.06-.24-.119-.36-.179-.225-.091-.435-.166-.659-.211-.33-.06-.659-.105-1.004-.105h-.096c-.135 0-.27.015-.39.03-.464.046-.899.211-1.273.465-.449.285-.779.689-.988 1.184-.029.075-.044.15-.059.225-.091.495-.045 1.02.15 1.484.061.135.135.27.225.39.091.121.194.236.315.346.121.119.254.211.39.315.146.09.299.165.465.239v.016c-.44.164-.869.345-1.244.614-.165.119-.329.251-.48.405-.149.135-.284.284-.405.449-.121.166-.225.346-.314.524-.09.18-.165.375-.225.585-.165.57-.195 1.17-.09 1.755.09.449.255.869.494 1.229.24.359.54.659.899.899.36.24.764.405 1.184.495.42.074.854.074 1.274 0 .419-.091.824-.254 1.168-.479.345-.226.66-.524.885-.885.225-.359.39-.75.465-1.17.075-.404.075-.824 0-1.229-.075-.404-.24-.779-.45-1.124-.12-.179-.254-.345-.405-.494-.15-.15-.314-.285-.48-.405-.165-.119-.345-.224-.524-.314-.181-.091-.375-.165-.585-.225-.165-.045-.329-.075-.494-.105v-.015c.15-.06.314-.135.465-.225.149-.091.284-.194.42-.315.135-.12.24-.25.346-.39.104-.135.194-.285.269-.435.075-.149.135-.314.18-.48.045-.18.074-.359.074-.539 0-.18-.029-.36-.074-.54-.045-.165-.105-.33-.18-.48-.075-.149-.165-.285-.27-.42-.104-.134-.209-.254-.344-.369-.135-.12-.285-.224-.435-.314-.149-.091-.299-.165-.449-.225-.15-.06-.314-.105-.465-.135-.139-.03-.299-.044-.449-.044-.149 0-.298.015-.438.044-.149.03-.299.074-.449.135-.15.06-.3.134-.449.224-.149.09-.284.195-.419.315-.135.12-.24.24-.345.375-.12.149-.209.299-.284.449-.074.15-.135.314-.165.479-.029.166-.045.33-.045.494 0 .18.016.359.06.539.03.165.09.33.165.48.074.149.164.285.269.435.104.135.225.254.344.369.121.12.27.224.42.315.149.09.299.149.449.209.149.06.3.105.449.135.15.03.3.045.449.045.149 0 .3-.016.449-.045.15-.03.3-.074.449-.135.149-.06.3-.12.449-.209.149-.091.285-.195.42-.315.119-.115.24-.234.344-.369.105-.15.195-.3.27-.449.074-.15.134-.301.164-.465.03-.165.046-.329.046-.494 0-.165-.016-.329-.046-.494-.03-.165-.09-.329-.165-.479-.074-.149-.164-.299-.269-.449-.104-.135-.225-.255-.344-.375-.135-.12-.271-.224-.42-.314-.149-.091-.3-.165-.449-.225-.149-.06-.299-.105-.449-.135-.149-.03-.3-.045-.449-.045-.15 0-.3.016-.449.045-.15.03-.3.074-.449.135-.15.06-.3.134-.449.224-.15.091-.285.195-.42.315-.119.12-.24.24-.344.375-.105.15-.195.3-.27.449-.074.15-.134.314-.164.479-.03.165-.046.329-.046.494 0 .165.016.329.046.494.03.164.09.314.165.465.074.149.164.299.269.434.104.135.225.255.344.375.135.12.271.225.42.315.149.09.3.164.449.224.149.06.3.105.449.135.149.03.3.045.449.045.15 0 .3-.015.449-.045.15-.03.3-.074.449-.135.15-.06.3-.135.449-.224.15-.09.285-.195.42-.315.12-.12.24-.24.345-.375.104-.135.195-.285.269-.434.075-.15.135-.301.165-.465.029-.165.044-.329.044-.494 0-.165-.015-.329-.044-.494z"/>
                        </svg>
                        SoundCloud
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6 neon-text">CUSTOM MUSIC</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Need custom music for your project? Bridge of Sinners offers bespoke composition services for films, games, and other media.
                </p>
                <Link 
                  href="/contact" 
                  className="neon-border px-8 py-4 rounded-md text-white text-lg font-medium transition-all duration-300 hover:bg-[#ff2d55]/20 inline-block"
                >
                  Discuss Your Project
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
