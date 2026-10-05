import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { youtubePlaylists } from "../../screens/home/constants";

export default function Listen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  // Debugging logs
  console.log("Listen Component - isOpen:", isOpen);
  console.log("Listen Component - youtubePlaylists length:", youtubePlaylists?.length);

  const [expandedPlaylistId, setExpandedPlaylistId] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % youtubePlaylists.length);
    setSelectedVideoId(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + youtubePlaylists.length) % youtubePlaylists.length);
    setSelectedVideoId(null);
  };

  const currentPlaylist = youtubePlaylists[currentIndex];

  return (
    <section className="w-full py-24 px-6 bg-warmWhite overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Spiritual Nourishment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6"
          >
            Listen & Watch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed font-body"
          >
            Deepen your faith through our latest teachings.
            Use the arrows to browse through our different spiritual series.
          </motion.p>
        </div>

        {/* Main Carousel Area */}
        <div className="relative group max-w-5xl mx-auto">

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white text-primary shadow-xl hover:bg-accent hover:text-white transition-all duration-300 hidden md:flex items-center justify-center border-2 border-gray-100 hover:border-accent"
            aria-label="Previous Playlist"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          {/* Video Content Wrapper */}
          <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <AnimatePresence mode="wait">
                <motion.iframe
                  key={selectedVideoId || currentPlaylist.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  src={selectedVideoId
                    ? `https://www.youtube.com/embed/${selectedVideoId}?playlist=${currentPlaylist.id}`
                    : `https://www.youtube.com/embed/videoseries?list=${currentPlaylist.id}`
                  }
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
            </AnimatePresence>

            {/* Playlist Label Overlay */}
            <div className="absolute top-6 left-6 z-20">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-accent/20">
                <p className="text-primary font-bold text-sm md:text-base">
                  {currentPlaylist.title} <span className="text-gray-500 font-medium text-xs ml-1">({currentPlaylist.count} Videos)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white text-primary shadow-xl hover:bg-accent hover:text-white transition-all duration-300 hidden md:flex items-center justify-center border-2 border-gray-100 hover:border-accent"
            aria-label="Next Playlist"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* Control Section */}
        <div className="mt-12 flex flex-col items-center gap-6">
          {/* Single Playlist Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-8 py-3 bg-[#0f172a] text-white font-bold rounded-full shadow-lg hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center group"
          >
            <span className="uppercase tracking-widest text-xs">{isOpen ? "Close Playlists" : "Browse All Playlists"}</span>
          </button>

          {/* Expandable Playlist List */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {youtubePlaylists.map((playlist, index) => (
                    <div key={playlist.id} className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          setExpandedPlaylistId(expandedPlaylistId === playlist.id ? null : playlist.id);
                          setCurrentIndex(index);
                          setSelectedVideoId(null);
                        }}
                        className={`p-4 rounded-2xl text-left transition-all duration-300 border-2 text-sm font-medium
                          ${currentIndex === index
                            ? "bg-accent text-primary border-accent shadow-md scale-105"
                            : "bg-white text-gray-600 border-gray-100 hover:border-accent hover:text-primary"
                          }`}
                      >
                        <div className="flex justify-between items-center gap-3">
                          <div className="flex items-center gap-3">
                            <span className="text-accent font-bold">{index + 1}.</span>
                            {playlist.title}
                          </div>
                          <span className="text-[10px] opacity-60 font-body">{playlist.count} videos</span>
                        </div>
                      </button>

                      <AnimatePresence>
                        {expandedPlaylistId === playlist.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-white border border-gray-100 rounded-xl p-2 flex flex-col gap-1 shadow-inner">
                              {playlist.videos.map((video, vIdx) => (
                                <button
                                  key={video.id}
                                  onClick={() => {
                                    // FIX: Instead of using placeholder ID, we use the playlist ID and tell YouTube to play this specific index
                                    setSelectedVideoId(video.id);
                                    setCurrentIndex(index);
                                    setIsOpen(false);
                                  }}
                                  className={`p-2 text-xs text-left rounded-lg transition-all duration-200
                                    ${selectedVideoId === video.id
                                      ? "bg-accent text-primary font-bold"
                                      : "text-gray-500 hover:bg-gray-50 hover:text-primary"
                                    }`}
                                >
                                    {vIdx + 1}. {video.title}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
