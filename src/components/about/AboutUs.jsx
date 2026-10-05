import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/assets/images/about-us.png"
            alt="About Our Community"
            className="w-full h-auto rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
        <div className="flex-1">
          <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            Our Heart
          </span>
          <h2 className="text-4xl md:text-7xl font-bold font-heading mb-6 md:mb-8 text-primary leading-[1.1]">
            About Our Community
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-body mb-6">
            We are a diverse family of believers dedicated to sharing the unconditional love of Christ with everyone. Our church is more than a building—it's a sanctuary for the weary, a home for the lonely, and a place of growth for all.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed font-body mb-8">
            Founded on the principles of faith, hope, and love, we strive to be a light in our city, serving the marginalized and uplifting the broken through the power of the Gospel.
          </p>
          <button
            onClick={() => navigate('/history')}
            className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all duration-300 shadow-md"
          >
            Our History
          </button>
        </div>
      </div>
    </section>
  );
}
