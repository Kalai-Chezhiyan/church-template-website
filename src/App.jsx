import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./screens/home/home";
import Contact from "./screens/contact/Contact";
import History from "./screens/history/History";
import ProgramDetail from "./screens/program/ProgramDetail";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Home
        setContactOpen={setIsContactOpen}
        setHistoryOpen={setIsHistoryOpen}
        setSelectedProgram={setSelectedProgram}
      />
      <AnimatePresence>
        {isContactOpen && (
          <Contact onClose={() => setIsContactOpen(false)} />
        )}
        {isHistoryOpen && (
          <History onClose={() => setIsHistoryOpen(false)} />
        )}
        {selectedProgram && (
          <ProgramDetail
            program={selectedProgram}
            onClose={() => setSelectedProgram(null)}
            openContact={() => {
              setSelectedProgram(null);
              setIsContactOpen(true);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

