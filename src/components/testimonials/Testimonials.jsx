import React from "react";

export default function Testimonials({ testimonials }) {
  return (
    <section className="w-full py-24 px-6 bg-warmWhite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            Heartfelt Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
            Transformation
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed font-body">
            Real stories from people whose lives have been touched by the grace of God in our community.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 no-scrollbar">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-full md:w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-4 right-6 text-accent/20 text-8xl font-serif pointer-events-none">
                “
              </div>
              <div className="relative z-10">
                <p className="text-xl font-heading italic text-gray-700 mb-8 leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <p className="font-bold text-primary leading-none">{t.name}</p>
                    <p className="text-xs text-gray-500 mt-1">Member since {t.memberSince}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
