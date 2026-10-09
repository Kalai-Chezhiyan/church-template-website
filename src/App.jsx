import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Contact from "./screens/contact/Contact";
import History from "./screens/history/History";
import Home from "./screens/home/home";
import ProgramDetail from "./screens/program/ProgramDetail";
import LearnMore from "./screens/about/LearnMore";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />}>
          <Route path="contact" element={<Contact />} />
          <Route path="history" element={<History />} />
          <Route path="program/:id" element={<ProgramDetail />} />
          <Route path="learn-more" element={<LearnMore />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
