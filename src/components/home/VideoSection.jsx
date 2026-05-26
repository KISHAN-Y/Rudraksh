import React, { useState } from 'react';
import { Play } from 'lucide-react';
import MosaicGrid from '../common/MosaicGrid';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-brand-dark overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Video Frame Wrapper */}
          <div className="relative bg-brand-medium border border-white/10 p-6 md:p-10 shadow-2xl">
            
            {/* Corner Mosaic Sticking Out (Top-Left) */}
            <div className="absolute -top-6 -left-6 z-20">
              <MosaicGrid preset="video-corner-tl" width="w-20" height="h-20" />
            </div>

            {/* Corner Mosaic Sticking Out (Bottom-Right) */}
            <div className="absolute -bottom-6 -right-6 z-20">
              <MosaicGrid preset="video-corner-br" width="w-20" height="h-20" />
            </div>
            
            {/* Video Player Display */}
            <div className="relative aspect-video w-full bg-[#071324] flex items-center justify-center overflow-hidden border border-white/5 group select-none">
              {!isPlaying ? (
                <>
                  {/* Clinic Background Image Poster */}
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" 
                    alt="Rudreksh Dental Clinic Tour" 
                    className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                  
                  {/* Blur backdrop for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent pointer-events-none" />

                  {/* Play Button Icon Container */}
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 w-20 h-20 bg-white text-brand-dark rounded-none flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 shadow-2xl hover:scale-110 cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </button>

                  <div className="absolute bottom-6 left-6 text-left">
                    <span className="text-brand-accent text-xs font-heading font-semibold uppercase tracking-widest block mb-1">Clinic Tour</span>
                    <h3 className="text-white text-lg font-heading font-bold">Experience Our Comfortable & Modern Environment</h3>
                  </div>
                </>
              ) : (
                /* Embed a simulated loop or a real placeholder video link */
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="Rudreksh Clinic Tour" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
