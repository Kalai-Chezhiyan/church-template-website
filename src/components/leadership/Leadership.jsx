import React from "react";

export default function Leadership({ leadership }) {
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-widest mb-4 block">
            Guidance & Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
            Our Leadership
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-body">
            Meet the shepherds who lead our congregation with faith, love, and a commitment to the Word.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leadership.map((leader, idx) => (
            <div key={idx} className="group text-center">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square shadow-lg transition-all duration-500 group-hover:shadow-accent/20">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-accent transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-1">{leader.name}</h3>
              <p className="text-accent font-bold uppercase text-xs tracking-widest mb-4">{leader.role}</p>
              <p className="text-gray-600 font-body text-sm leading-relaxed px-4">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
