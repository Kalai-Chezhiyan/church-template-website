import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "../../components/icons/Icons";
import Button from "../../components/button/button";
import { useFirestoreDocument } from "../../hooks/useFirestoreData";
import { programs as fallbackPrograms } from "../home/constants";

export default function ProgramDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: program, loading } = useFirestoreDocument("programs", id, fallbackPrograms.find(p => p.title === id));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
        <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!program) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm"
        onClick={() => navigate('/')}
      >
        <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm">
          <h2 className="text-2xl font-bold text-primary mb-4">Program Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the program you're looking for.</p>
          <Button buttonName="GO BACK" color="bg-primary text-white" onClick={() => navigate('/')} />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={() => navigate('/')}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border-l-4 border-accent overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
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
          <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto scrollbar-hide flex flex-col">
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

              <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
                {program.description}
                <br /><br />
                Our commitment to this initiative stems from a deep desire to serve those in need and to reflect the love of Christ in every action we take. We invite you to be a part of this journey of faith and service.
              </p>

              <div className="flex flex-wrap gap-4 mt-auto">
                <Button
                  buttonName="GET INVOLVED"
                  color="bg-primary text-white"
                  className="px-8 py-2 text-xs"
                  onClick={() => navigate('/contact')}
                />
                <Button
                  buttonName="CLOSE"
                  color="bg-white text-primary border border-gray-200"
                  className="px-8 py-2 text-xs"
                  onClick={() => navigate('/')}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
