import React from "react";
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
import Login from "../../components/login/Login";
import { events, missionImage, programs, sermons, visitData, leadership, testimonials, givingFunds } from "./constants";

export default function Home({ setContactOpen, setHistoryOpen, setSelectedProgram }) {
  return (
    <div className="min-h-screen w-full">
      <Header setContactOpen={setContactOpen} />
      <div className="w-full overflow-x-hidden">
        <HeroSection />
        <div id="our-mission">
          <OurMission />
        </div>
        <div id="programs">
          <Programs setSelectedProgram={setSelectedProgram} />
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
          <AboutUs setHistoryOpen={setHistoryOpen} />
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
        <JoinUs />
        <div id="login-section">
          <Login />
        </div>
        <Footer />
      </div>
    </div>
  );
}

const OurMission = () => {
  return (
    <section className="w-full py-24 px-6 bg-warmWhite">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <div className="text-center md:text-left mb-12">
            <span className="text-accent font-bold text-sm uppercase tracking-widest mb-4 block">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-primary leading-tight">
              Driven by Faith, <br className="hidden md:block" />
              United in Love
            </h2>
            <p className="max-w-2xl mx-auto md:mx-0 text-lg text-gray-600 leading-relaxed font-body mb-8">
              At our Church, we are united by our shared faith in Jesus Christ and
              our commitment to living out the Gospel message in our daily lives,
              striving to be a light of hope and compassion to all.
            </p>
            <Button
              className="border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              buttonName="LEARN MORE NOW"
              color="bg-white"
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            />
          </div>
        </div>

        <div className="flex-1 relative h-[300px] sm:h-[500px] w-full">
          {/* Asymmetric overlapping image grid */}
          <img
            src={missionImage[0]}
            className="absolute top-0 left-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-xl z-10 transition-transform duration-500 hover:scale-105"
            alt="Mission 1"
          />
          <img
            src={missionImage[1]}
            className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-xl z-20 border-8 border-warmWhite transition-transform duration-500 hover:scale-105"
            alt="Mission 2"
          />
          <img
            src={missionImage[2]}
            className="absolute top-1/4 right-12 w-1/3 h-1/3 object-cover rounded-2xl shadow-xl z-30 border-8 border-warmWhite transition-transform duration-500 hover:scale-105"
            alt="Mission 3"
          />
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
        src="/assets/images/landingVedio.mp4 "
        type="video/mp4"
        autoPlay
        loop
        muted
        controls={false}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/40" />

      <div className="relative z-10 flex h-full w-full items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl font-heading">
            Transform Life <br />
            <span className="text-white/90">Restore Hope</span>
          </h1>
          <p className="mb-10 text-lg opacity-90 md:text-xl lg:text-2xl font-body">
            Our community extends beyond physical boundaries. <br className="hidden md:block" />
            Join us in faith, love, and service.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              buttonName="JOIN NOW"
              color="bg-transparent text-white border border-white"
              className="hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              onClick={() => {
                const loginSection = document.getElementById("login-section");
                if (loginSection) {
                  loginSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            />
            <Button
              className="border border-white border-solid hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              buttonName="MAKE A DONATION"
              fontColor="text-white"
              onClick={() => {
                const givingSection = document.getElementById("giving-section");
                if (givingSection) {
                  givingSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-widest mb-4 block">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-primary">
            Programs and Initiatives
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed font-body mb-8">
            Our donation campaigns help and support the church's mission, allowing
            people to contribute to meaningful work and outreach in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {programs.map((program) => (
            <ProgramCard key={program.title} data={program} onClick={setSelectedProgram} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Bible = () => {
  return (
    <section className="w-full py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image Side - Elegant Framing */}
        <div className="relative order-2 lg:order-1">
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
        </div>

        {/* Text Side - Editorial Layout */}
        <div className="relative order-1 lg:order-2 space-y-8">
          <div className="relative">
            {/* Large Decorative Quote Mark */}
            <span className="absolute -top-10 -left-6 text-8xl font-serif text-accent/20 select-none">“</span>

            <div className="flex gap-6">
              {/* Vertical Accent Line */}
              <div className="hidden md:block w-1 h-full bg-accent rounded-full opacity-50" />

              <div className="space-y-6">
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed text-primary opacity-90">
                  “Love is patient, love is kind. It does not envy, it does not
                  boast, it is not proud. It does not dishonor others, it is not
                  self-seeking, it is not easily angered, it keeps no record of wrongs.
                  Love does not delight in evil but rejoices with the truth. It always
                  protects, always trusts, always hopes, always perseveres.”
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-accent" />
                  <div className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-gray-500">
                    — The Holy Bible
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const UpcomingEvents = () => {
  return (
    <section className="relative w-full py-24 px-6 bg-warmWhite overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <span className="text-accent font-bold text-sm uppercase tracking-widest mb-4 block">
          Coming Soon
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16 text-primary">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          {events.map((event, index) => (
            <EventCard key={index} data={event} />
          ))}
        </div>
      </div>
    </section>
  );
};
