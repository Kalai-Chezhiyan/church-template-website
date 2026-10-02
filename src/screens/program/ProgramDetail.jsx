import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone } from "../../components/icons/Icons";
import Button from "../../components/button/button";

export default function ProgramDetail({ program, onClose, openContact }) {
  if (!program) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-warmWhite w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-[0_0_20px_rgba(212,175,55,0.3)] border-2 border-accent overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Top Right */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 text-primary transition-colors"
        >
          <span className="text-xl">✕</span>
        </button>

        <div className="flex flex-col md:flex-row h-full overflow-hidden">
          {/* Image Side */}
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              src={program.img}
              alt={program.subtitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>

          {/* Content Side */}
          <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 block">
                Program Spotlight
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
                {program.subtitle}
              </h2>
              <div className="mb-6 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-accent w-fit rounded-full">
                {program.title}
              </div>

              <p className="text-white font-bold text-lg leading-relaxed font-body mb-8">
                {program.description}
                <br /><br />
                Our commitment to this initiative stems from a deep desire to serve those in need and to reflect the love of Christ in every action we take. We invite you to be a part of this journey of faith and service.
              </p>

              <div className="flex flex-wrap gap-4 mt-auto">
                <Button
                  buttonName="GET INVOLVED"
                  color="bg-primary text-white"
                  className="px-8 py-2 text-xs"
                  onClick={openContact}
                />
                <Button
                  buttonName="CLOSE"
                  color="bg-white text-primary border border-gray-200"
                  className="px-8 py-2 text-xs"
                  onClick={onClose}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
