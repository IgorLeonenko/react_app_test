"use client";

import Image from "next/image";
import Link from "next/link";

interface Album {
  id: number;
  title: string;
  year: string;
  cover: string;
  description: string;
}

const albums: Album[] = [
  {
    id: 1,
    title: "Neon Dystopia",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1000&auto=format&fit=crop",
    description: "A journey through the dark streets of a cyberpunk future."
  },
  {
    id: 2,
    title: "Digital Dreams",
    year: "2023",
    cover: "https://images.unsplash.com/photo-1633107308636-70de0c3a1e2c?q=80&w=1000&auto=format&fit=crop",
    description: "Synthwave melodies meet dystopian atmospheres."
  },
  {
    id: 3,
    title: "Chrome Horizons",
    year: "2022",
    cover: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=1000&auto=format&fit=crop",
    description: "The soundtrack to a world of technological singularity."
  }
];

const MusicSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background grid effect */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 242, 255, 0.3) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(0, 242, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text-blue">
            LATEST RELEASES
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore the sonic landscapes of Bridge of Sinners. From pulsing synthwave beats to 
            atmospheric cyberpunk soundscapes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div 
              key={album.id} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 border border-gray-800 hover:border-[#00f2ff]/50 group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-xl font-bold text-white group-hover:neon-text-blue transition-all duration-300">
                    {album.title}
                  </h3>
                  <p className="text-gray-400">{album.year}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-400 mb-4">{album.description}</p>
                <div className="flex justify-between items-center">
                  <Link 
                    href={`/music/${album.id}`}
                    className="text-[#00f2ff] hover:text-white transition-colors duration-300"
                  >
                    Listen Now
                  </Link>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-400 hover:text-[#00f2ff] transition-colors duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#ff2d55] transition-colors duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/music" 
            className="neon-border-blue px-6 py-3 rounded-md text-white text-lg font-medium transition-all duration-300 hover:bg-[#00f2ff]/20 inline-block"
          >
            View All Music
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
