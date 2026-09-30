import React from "react";
import { Heart, HandHelping, Sparkles } from "../icons/Icons";

export default function Services() {
  return (
    <section className="w-full py-24 px-6 bg-warmWhite">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="text-accent font-bold text-sm uppercase tracking-widest mb-4 block">
          Our Care
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
          Our Services
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 font-body">
          We offer a variety of spiritual and communal services designed to support you in every season of your life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Prayer Support", desc: "Dedicated prayer teams available 24/7 for your needs.", icon: <Heart className="w-10 h-10 text-accent" /> },
          { title: "Counseling", desc: "Biblical guidance and support for mental and emotional health.", icon: <HandHelping className="w-10 h-10 text-accent" /> },
          { title: "Youth Mentorship", desc: "Guiding the next generation to walk boldly in faith.", icon: <Sparkles className="w-10 h-10 text-accent" /> },
        ].map((service, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center">
            <div className="flex justify-center mb-6 group-hover:scale-125 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold font-heading text-primary mb-3">{service.title}</h3>
            <p className="text-gray-600 font-body leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
