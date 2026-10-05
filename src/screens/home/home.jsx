import React, { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/button/button";
import { EventCard, ProgramCard } from "../../components/cards/cards";
import Header from "../../components/header/header";
import Listen from "../../components/listen/listen";
import PlanVisit from "../../components/visit/PlanVisit";
import Leadership from "../../components/leadership/Leadership";
import Testimonials from "../../components/testimonials/Testimonials";
import Giving from "../../components/giving/Giving";
import Footer from "../../components/footer/Footer";
import AboutUs from "../../components/about/AboutUs";
import Services from "../../components/services/Services";
import JoinUs from "../../components/joinus/JoinUs";
import { events, missionImage, programs, sermons, visitData, leadership, testimonials, givingFunds } from "./constants";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="w-full overflow-x-hidden">
        <HeroSection />
        <div id="our-mission">
          <OurMission />
        </div>
        <div id="programs">
          <Programs />
        </div>
        <div id="sermons">
          <Bible />
        </div>
        <div id="events">
          <UpcomingEvents />
        </div>
        <div id="listen">
          <Listen sermons={sermons} />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="leadership">
          <Leadership leadership={leadership} />
        </div>
        <div id="visit">
          <Services />
        </div>
        <div id="giving-section">
          <Giving givingFunds={givingFunds} />
        </div>
        <div id="join-us">
          <JoinUs />
        </div>
        <Footer />
      </div>
      <Outlet />
    </div>
  );
}


const OurMission = () => {
  return (
    <section className="w-full py-20 md:py-32 px-6 bg-warmWhite overflow-hidden relative">
      {/* Subtle Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center md:text-left z-20"
        >
          <div className="text-center md:text-left mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 md:mb-6 block"
            >
              Our Sacred Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold font-heading mb-6 md:mb-8 text-primary leading-[1.1]"
            >
              Driven by Faith, <br className="hidden md:block" />
              <span className="text-accent italic font-serif">United in Love</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-2xl mx-auto md:mx-0 text-base md:text-lg text-gray-600 leading-relaxed font-body mb-8 md:mb-10"
            >
              We are united by our shared faith in Jesus Christ and
              our commitment to living out the Gospel message in our daily lives,
              striving to be a light of hope and compassion to all.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-500 rounded-full shadow-sm hover:shadow-xl hover:-translate-y-1"
                buttonName="DISCOVER OUR HEART"
                color="bg-white"
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="flex-1 relative h-auto min-h-[350px] sm:min-h-[450px] md:h-[600px] w-full mt-12 md:mt-0">
          {/* Modern Layered Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute top-0 left-0 w-2/3 aspect-square md:w-2/3 md:h-2/3 z-10"
          >
            <img
              src={missionImage[0]}
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105"
              alt="Mission 1"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-0 right-0 w-2/3 aspect-square md:w-2/3 md:h-2/3 z-20"
          >
            <img
              src={missionImage[1]}
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105"
              alt="Mission 2"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute top-1/3 right-2 md:right-8 w-1/2 aspect-square md:w-1/3 md:h-1/3 z-30"
          >
            <img
              src={missionImage[2]}
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105"
              alt="Mission 3"
            />
          </motion.div>

          {/* Decorative gold element behind images */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src="/assets/images/landingVedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/40" />

      <div className="relative z-10 flex h-full w-full items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl font-heading">
            Transform Life <br />
            <span className="text-white/90">Restore Hope</span>
          </h1>
          <p className="mb-10 text-lg opacity-90 md:text-xl lg:text-sxl font-body">
            Our community extends beyond physical boundaries. <br className="hidden md:block" />
            Join us in faith, love, and service.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              buttonName="JOIN NOW"
              color="bg-transparent text-white border border-white"
              className="hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              onClick={() => {
                const joinUsSection = document.getElementById("join-us");
                if (joinUsSection) {
                  joinUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            />
            <Button
              className="border border-white border-solid hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              buttonName="EXPLORE SERVICES"
              fontColor="text-white"
              onClick={() => {
                const visitSection = document.getElementById("visit");
                if (visitSection) {
                  visitSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Programs = ({ setSelectedProgram }) => {
  return (
    <section className="w-full py-20 md:py-24 px-6 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-primary">
            Programs and Initiatives
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed font-body mb-8">
            Our donation campaigns help and support the church's mission, allowing
            people to contribute to meaningful work and outreach in our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProgramCard data={program} onClick={setSelectedProgram} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Bible = () => {
  return (
    <section className="w-full py-20 md:py-24 px-6 bg-white overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Image Side - Elegant Framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700">
            <img
              className="w-full h-[300px] md:h-[500px] object-cover"
              src="/assets/images/bible-modern.webp"
              alt="Modern Bible"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
          {/* Decorative Background Element */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          {/* Elegant Frame Accent */}
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/30 rounded-3xl pointer-events-none z-20" />
        </motion.div>

        {/* Text Side - Editorial Layout */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2 space-y-8"
        >
          <div className="relative">
            {/* Large Decorative Quote Mark */}
            <span className="absolute -top-10 -left-6 text-8xl font-serif text-accent/20 select-none">“</span>

            <div className="flex gap-6">
              {/* Vertical Accent Line */}
              <div className="hidden md:block w-1 h-full bg-accent rounded-full opacity-50" />

              <div className="space-y-6">
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed text-primary opacity-90"
                >
                  “Love is patient, love is kind. It does not envy, it does not
                  boast, it is not proud. It does not dishonor others, it is not
                  self-seeking, it is not easily angered, it keeps no record of wrongs.
                  Love does not delight in evil but rejoices with the truth. It always
                  protects, always trusts, always hopes, always perseveres.”
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-px w-8 bg-accent" />
                  <div className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-gray-500">
                    — The Holy Bible
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const UpcomingEvents = () => {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 bg-warmWhite overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-bold text-sm uppercase tracking-widest mb-4 block">
            Coming Soon
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16 text-primary">
            Upcoming Events
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <EventCard data={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
