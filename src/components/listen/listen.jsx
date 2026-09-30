import React, { useState, useRef, useEffect } from "react";

export default function Listen({ sermons }) {
  const [currentSermon, setCurrentSermon] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio());

  const featuredSermon = sermons.find((s) => s.isFeatured);
  const otherSermons = sermons.filter((s) => !s.isFeatured);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      const current = audio.currentTime;
      const duration = audio.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = (sermon) => {
    const audio = audioRef.current;

    if (currentSermon?.id === sermon.id) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentSermon(sermon);
      audio.src = sermon.audioUrl;
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <section className="w-full py-24 px-6 bg-warmWhite overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-widest mb-4 block">
            Spiritual Nourishment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
            Listen to Sermons
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-body">
            Deepen your faith through our latest teachings and biblical reflections.
          </p>
        </div>

        {/* Featured Sermon */}
        {featuredSermon && (
          <div className="relative group mb-16 overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.01]">
            <div className="absolute inset-0 bg-primary/80 z-10 group-hover:bg-primary/70 transition-all duration-500" />
            <img
              src={featuredSermon.img}
              alt={featuredSermon.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="relative z-20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <span className="text-accent font-bold uppercase text-xs tracking-tighter mb-2 block">
                  Featured Teaching
                </span>
                <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
                  {featuredSermon.title}
                </h3>
                <p className="text-white/80 text-lg mb-8 max-w-xl">
                  {featuredSermon.description}
                </p>
                <button
                  onClick={() => togglePlay(featuredSermon)}
                  className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center gap-3 mx-auto md:mx-0 group/btn"
                >
                  {currentSermon?.id === featuredSermon.id && isPlaying ? (
                    <span className="text-xl">⏸</span>
                  ) : (
                    <span className="text-xl">▶</span>
                  )}
                  <span>{currentSermon?.id === featuredSermon.id && isPlaying ? "Pause" : "Listen Now"}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sermon List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border-l-4 border-transparent hover:border-accent"
              onClick={() => togglePlay(sermon)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {currentSermon?.id === sermon.id && isPlaying ? "⏸" : "▶"}
                </div>
                <span className="text-xs font-medium text-gray-400">{sermon.date}</span>
              </div>
              <h4 className="text-xl font-bold font-heading text-primary mb-2 group-hover:text-accent transition-colors">
                {sermon.title}
              </h4>
              <p className="text-sm text-gray-600 font-body line-clamp-2 mb-4">
                {sermon.description}
              </p>
              <div className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                {sermon.speaker}
              </div>
            </div>
          ))}
        </div>

        {/* Global Sticky Player */}
        {currentSermon && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl bg-primary/90 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl z-50 border border-accent/20 flex items-center gap-4 transition-all duration-500 animate-in slide-in-from-bottom-10">
            <img src={currentSermon.img} alt="" className="h-12 w-12 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h5 className="text-sm font-bold truncate">{currentSermon.title}</h5>
                <span className="text-[10px] text-accent font-bold">{Math.floor(progress)}%</span>
              </div>
              <input
                type="range"
                className="w-full h-1 accent-accent bg-white/20 rounded-full cursor-pointer"
                value={progress}
                onChange={handleProgressChange}
              />
            </div>
            <button
              onClick={() => togglePlay(currentSermon)}
              className="h-10 w-10 bg-accent text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
