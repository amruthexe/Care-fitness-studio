"use client"; // This tells Next.js that this component should be a client component

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ thumbnailUrl, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full max-w-[1200px] mx-auto px-4">
      {/* Gym Tour Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-6">Gym Tour</h2>

      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        {!isPlaying ? (
          <div 
            className="relative cursor-pointer group"
            onClick={handlePlay}
          >
            {/* Thumbnail */}
            <img 
              src={thumbnailUrl} 
              alt="Video thumbnail" 
              className="w-full h-full object-cover rounded-lg"
            />
            
            {/* Red Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-black/50 group-hover:opacity-75 transition-opacity" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 rounded-full p-4 transform group-hover:scale-110 transition-transform">
                <Play size={32} className="text-white" />
              </div>
            </div>
          </div>
        ) : (
          <video 
            autoPlay 
            controls 
            className="w-full h-full rounded-lg"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
