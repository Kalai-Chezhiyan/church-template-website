import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChurchLogo } from "../icons/Icons";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);
  const [verse, setVerse] = useState(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

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
      title: "Our Sacred Mission",
      desc: "Learn about our core values and how we strive to bring hope and love to the community.",
      id: "our-mission"
    },
    {
      title: "Programs & Initiatives",
      desc: "Explore our educational, emergency, and social justice initiatives.",
      id: "programs"
    },
    {
      title: "The Holy Bible",
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
      title: "Learn More",
      desc: "Discover our vision, core values, and how we serve the community.",
      id: "learn-more"
    },
    {
      title: "About Us",
      desc: "Get to know the heart behind our ministry and our vision.",
      id: "about"
    },
    {
      title: "Our Leadership",
      desc: "Meet the pastors and elders who guide our spiritual journey.",
      id: "leadership"
    },
    {
      title: "Our Services",
      desc: "Discover the various ways we worship and serve together.",
      id: "visit"
    },
    {
      title: "Plan Your Visit",
      desc: "Find service times, location, and everything you need to plan your first visit.",
      id: "visit"
    },
    {
      title: "Giving",
      desc: "Partner with us in expanding the light of the Gospel through your generosity.",
      id: "giving-section"
    },
    {
      title: "Contact Us",
      desc: "Get in touch with us for prayers, inquiries, or support.",
      id: "contact"
    }
  ];

  const handleNavClick = (topic) => {
    if (topic.id === "contact" || topic.id === "learn-more") {
      navigate(`/${topic.id === "contact" ? "contact" : "learn-more"}`);
    } else {
      const section = document.getElementById(topic.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
    setSelectedPage(null);
  };

  const handleLogoClick = () => {
    const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    setVerse(randomVerse);

    // Auto-hide the verse after 5 seconds
    setTimeout(() => setVerse(null), 5000);
  };

  const handleAuthAction = async (action) => {
    if (action === 'login') {
      navigate('/login');
    } else if (action === 'logout') {
      await logout();
      navigate('/');
    } else if (action === 'admin') {
      navigate('/admin/dashboard');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full px-6 py-6 absolute top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="relative flex flex-col items-start">
          <div
            onClick={handleLogoClick}
            className="group relative flex items-center gap-3 cursor-pointer"
          >
            <div className="flex flex-col items-start">
              <div className="text-xl md:text-2xl font-bold tracking-[0.2em] text-white font-heading transition-all duration-500 group-hover:text-accent">
                JESUS LOVES ME
              </div>
              <div className="flex items-center gap-2 overflow-hidden">
                <div className="h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-500" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/70 group-hover:text-accent transition-all duration-500 font-body font-light">
                  Church
                </span>
                <div className="h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Verse Toast */}
          {verse && (
            <div className="absolute top-10 left-0 w-64 bg-white/90 backdrop-blur-sm text-primary p-3 rounded-full shadow-xl border border-accent z-[70] animate-in fade-in zoom-in-95 duration-300 text-center">
              <p className="text-xs italic font-body leading-tight">"{verse.text}"</p>
              <p className="text-[10px] font-bold uppercase text-accent mt-1">— {verse.ref}</p>
            </div>
          )}
        </div>

        {/* Hamburger Menu Icon - Now on the Right, always visible */}
        <div
          className="text-white cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>

        {/* Full Screen Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop blur overlay */}
            <div
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm animate-in fade-in duration-300"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Side Panel */}
            <div className="relative w-full max-w-md h-full bg-white border-l-4 border-accent text-primary shadow-2xl p-8 flex flex-col animate-in slide-in-from-right duration-500 ease-out">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-primary/70 hover:text-accent hover:rotate-90 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex-1 overflow-y-auto py-12 scrollbar-hide">
                <div className="text-left mb-12">
                  <h3 className="text-3xl font-bold font-heading uppercase tracking-widest leading-tight text-primary">
                    Explore Our <br />
                    <span className="text-accent">Ministry</span>
                  </h3>
                  <div className="w-12 h-1 bg-accent mt-4" />
                </div>

                <div className="space-y-4">
                  {pageTopics.map((topic, index) => (
                    <div
                      key={topic.title}
                      className="cursor-pointer group text-left p-4 rounded-xl transition-all duration-300 hover:bg-accent/10 animate-in fade-in slide-in-from-right-4"
                      style={{ animationDelay: `${index * 40}ms` }}
                      onClick={() => handleNavClick(topic)}
                    >
                      <div className="text-lg font-medium uppercase tracking-wider text-primary group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-300 flex items-center gap-3 group-hover:translate-x-2">
                        <span className="text-accent transition-transform duration-300 group-hover:scale-125">{"→"}</span>
                        {topic.title}
                      </div>
                      <p className="text-sm text-primary/60 mt-1 leading-relaxed font-body">
                        {topic.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Auth Section */}
              <div className="border-t border-primary/10 pt-6 flex flex-col gap-4">
                {currentUser ? (
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleAuthAction('admin')}
                      className="w-full py-2 px-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/80 transition-colors text-sm uppercase tracking-wider"
                    >
                      Admin Dashboard
                    </button>
                    <button
                      onClick={() => handleAuthAction('logout')}
                      className="w-full py-2 px-4 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors text-sm"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAuthAction('login')}
                    className="w-full py-2 px-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider"
                  >
                    Login to Admin
                  </button>
                )}
                <p className="text-center text-xs text-primary/40 font-body italic">
                  "Faith is the assurance of things hoped for"
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
