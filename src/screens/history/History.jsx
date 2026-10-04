import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "../../components/icons/Icons";
import Button from "../../components/button/button";

const historyMilestones = [
  {
    year: "1995",
    title: "The First Seed",
    desc: "Our journey began in a small living room with seven devoted believers, praying for a place where all could find peace and purpose in Christ.",
    icon: "🌱"
  },
  {
    year: "2005",
    title: "Building the Sanctuary",
    desc: "After a decade of growth and faith, the community came together to build our first permanent sanctuary, a beacon of hope for the entire city.",
    icon: "⛪"
  },
  {
    year: "2012",
    title: "Community Outreach Expansion",
    desc: "We launched our first series of community food banks and youth mentorship programs, extending our mission beyond the church walls.",
    icon: "🤝"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    desc: "Adapting to a changing world, we embraced technology to reach thousands globally, ensuring the Word of God reached every home during difficult times.",
    icon: "🌐"
  },
  {
    year: "2024",
    title: "A Growing Legacy",
    desc: "Today, we continue to grow, not just in numbers, but in depth of faith and love, serving as a sanctuary for thousands of diverse souls.",
    icon: "✨"
  },
];

export default function History() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={() => navigate('/')}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-[#fafaf9] w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#0f172a] text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="text-left">
              <h2 className="text-xl font-bold font-heading">Our Sacred History</h2>
              <p className="text-white/70 text-xs font-body">Walking by faith through the generations</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-1 bg-white">
          <div className="relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#d4af37]/30 -translate-x-1/2" />

            <div className="space-y-12">
              {historyMilestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#d4af37] rounded-full border-4 border-white z-10 -translate-x-1/2" />

                  {/* Content Card */}
                  <div className="flex-1 pl-12 md:pl-0">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{milestone.icon}</span>
                        <span className="text-[#d4af37] font-bold text-lg font-heading">{milestone.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0f172a] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-body">
                        {milestone.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t text-center shrink-0">
          <Button
            buttonName="BACK TO ABOUT"
            color="bg-[#0f172a] text-white"
            className="px-8 py-2 text-xs"
            onClick={() => navigate('/')}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
