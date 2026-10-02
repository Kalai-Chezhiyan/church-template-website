import { useState } from "react";
import { Menu, User } from "../icons/Icons";

export default function Header({ setContactOpen }) {
  const [showAbout, setShowAbout] = useState(false);
  const [showAllPages, setShowAllPages] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);
  const [verse, setVerse] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const leftValues = ["All Pages", "Our Church"];
  const rightValues = ["Contact Us"];

  const bibleVerses = [
    { text: "For I know the plans I have for you, declares the Lord.", ref: "Jeremiah 29:11" },
    { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
    { text: "Be strong and courageous. Do not be afraid.", ref: "Joshua 1:9" },
    { text: "Love is patient, love is kind.", ref: "1 Corinthians 13:4" },
    { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
    { text: "Trust in the Lord with all your heart.", ref: "Proverbs 3:5" },
    { text: "Faith is the assurance of things hoped for.", ref: "Hebrews 11:1" },
  ];

  const pageTopics = [
    {
      title: "Our Mission",
      desc: "Learn about our core values and how we strive to bring hope and love to the community.",
      id: "our-mission"
    },
    {
      title: "Programs",
      desc: "Explore our educational, emergency, and social justice initiatives.",
      id: "programs"
    },
    {
      title: "Bible Study",
      desc: "Explore the Holy Scriptures and join our virtual study series.",
      id: "sermons"
    },
    {
      title: "Upcoming Events",
      desc: "Stay updated with our latest gatherings and community activities.",
      id: "events"
    },
    {
      title: "Sermons",
      desc: "Listen to inspiring messages and biblical teachings from our leadership.",
      id: "listen"
    },
    {
      title: "About Us",
      desc: "Get to know the heart behind our ministry and our vision.",
      id: "about"
    },
    {
      title: "Leadership",
      desc: "Meet the pastors and elders who guide our spiritual journey.",
      id: "leadership"
    },
    {
      title: "Our Services",
      desc: "Discover the various ways we worship and serve together.",
      id: "visit"
    },
    {
      title: "Visit Us",
      desc: "Find service times, location, and everything you need to plan your first visit.",
      id: "visit"
    },
    {
      title: "Giving",
      desc: "Partner with us in expanding the light of the Gospel through your generosity.",
      id: "giving-section"
    }
  ];

  const handleNavClick = (e, value) => {
    if (value === "Our Church") {
      e.preventDefault();
      setShowAbout(!showAbout);
      setShowAllPages(false);
      // Close contact if it's open
      if (setContactOpen) {
        setContactOpen(false);
      }
    } else if (value === "Donations") {
      e.preventDefault();
      const givingSection = document.getElementById("giving-section");
      if (givingSection) {
        givingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setShowAbout(false);
      setShowAllPages(false);
    } else if (value === "All Pages") {
      e.preventDefault();
      setShowAllPages(!showAllPages);
      setShowAbout(false);
      setSelectedPage(null);
      // Close contact if it's open
      if (setContactOpen) {
        setContactOpen(false);
      }
    } else if (value === "Contact Us") {
      e.preventDefault();
      setContactOpen(true);
      setShowAbout(false);
      setShowAllPages(false);
    }
  };

  const handleLogoClick = () => {
    const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    setVerse(randomVerse);

    // Auto-hide the verse after 5 seconds
    setTimeout(() => setVerse(null), 5000);
  };

  return (
    <header className="w-full px-6 py-6 absolute top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-white/90">
          {leftValues.map((value) => (
            <a
              key={value}
              href="#"
              onClick={(e) => handleNavClick(e, value)}
              className="hover:text-accent transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] hover:-translate-y-1 hover:scale-110 inline-block"
            >
              {value}
            </a>
          ))}
        </div>

        {/* About Church Popover */}
        {showAbout && (
          <div className="absolute top-20 left-10 bg-white text-primary p-4 rounded-lg shadow-2xl max-w-xs z-[60] border-t-4 border-accent animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-sm leading-relaxed font-body">
              Our church was built on a foundation of unwavering faith and a vision to create a sanctuary for all.
              Established with the goal of bridging ancient scripture and modern living, we strive to be a beacon of hope and love in our community.
            </p>
            <button
              onClick={() => setShowAbout(false)}
              className="mt-3 text-xs font-bold uppercase text-accent hover:text-primary transition-colors"
            >
              Close
            </button>
          </div>
        )}

        {/* All Pages Overlay */}
        {showAllPages && (
          <div className="absolute top-20 left-10 bg-white text-primary p-6 rounded-lg shadow-2xl min-w-[300px] z-[60] border-t-4 border-accent animate-in fade-in slide-in-from-top-2 duration-300">
            <h3 className="text-lg font-bold font-heading mb-4 border-b pb-2">Site Map</h3>
            <div className="space-y-3">
              {pageTopics.map((topic) => (
                <div
                  key={topic.title}
                  className="cursor-pointer group"
                  onClick={() => {
                    if (selectedPage === topic.title) {
                      const section = document.getElementById(topic.id);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth", block: "start" });
                        setShowAllPages(false);
                      }
                    } else {
                      setSelectedPage(topic.title);
                    }
                  }}
                >
                  <div className="flex justify-between items-center text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors">
                    {topic.title}
                    <span className="text-xs opacity-50">{selectedPage === topic.title ? "−" : "+"}</span>
                  </div>
                  {selectedPage === topic.title && (
                    <p
                      className="text-xs text-gray-600 mt-1 leading-relaxed font-body animate-in fade-in slide-in-from-top-1 duration-200 cursor-pointer hover:text-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        const section = document.getElementById(topic.id);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth", block: "start" });
                          setShowAllPages(false);
                        }
                      }}
                    >
                      {topic.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowAllPages(false)}
              className="mt-6 w-full text-center text-xs font-bold uppercase text-accent hover:text-primary transition-colors"
            >
              Close
            </button>
          </div>
        )}

        {/* Logo / Brand */}
        <div className="relative flex flex-col items-center">
          <div
            onClick={handleLogoClick}
            className="text-2xl font-bold tracking-tighter text-white font-heading cursor-pointer transition-all duration-300 hover:text-accent hover:drop-shadow-[0_0_20px_rgba(212,175,55,1)] hover:-translate-y-1 hover:scale-110"
          >
            RELIGIOUS
          </div>

          {/* Verse Toast */}
          {verse && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white/90 backdrop-blur-sm text-primary p-3 rounded-full shadow-xl border border-accent z-[70] animate-in fade-in zoom-in-95 duration-300 text-center">
              <p className="text-xs italic font-body leading-tight">"{verse.text}"</p>
              <p className="text-[10px] font-bold uppercase text-accent mt-1">— {verse.ref}</p>
            </div>
          )}
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-white/90">
          {rightValues.map((value) => (
            <a
              key={value}
              href="#"
              onClick={(e) => handleNavClick(e, value)}
              className="hidden md:block hover:text-accent transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] hover:-translate-y-1 hover:scale-110 inline-block"
            >
              {value}
            </a>
          ))}

          {/* User Account Button */}
          <div className="relative">
            <div
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowAbout(false);
                setShowAllPages(false);
                if (setContactOpen) setContactOpen(false);
              }}
              className="p-2 rounded-full bg-white/10 text-white cursor-pointer hover:bg-accent hover:text-primary transition-all duration-300 border border-white/20"
            >
              <User className="w-5 h-5" />
            </div>
            {showUserMenu && (
              <div className="absolute top-12 right-0 bg-white text-primary p-4 rounded-lg shadow-2xl min-w-[200px] z-[60] border-t-4 border-accent animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex flex-col gap-2">
                  <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">Login</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">Your Account</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">My Prayer Requests</a>
                  <a href="#" className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors">Giving History</a>
                  <div className="border-t my-1 border-gray-100" />
                  <a href="#" className="px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-md transition-colors">Logout</a>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white cursor-pointer">
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </nav>
    </header>
  );
}
