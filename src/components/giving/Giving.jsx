import React, { useState } from "react";
import Button from "../button/button";

export default function Giving({ givingFunds }) {
  const [activeTab, setActiveTab] = useState("one-time");

  return (
    <section className="w-full py-24 px-6 bg-primary text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
          Partner with Us
        </span>
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
          Sow Into the Kingdom
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-12 max-w-2xl mx-auto font-body leading-relaxed">
          Your generosity allows us to reach the lost, support the broken, and expand the light of the Gospel in our city and beyond.
        </p>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {["one-time", "recurring"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-accent text-primary shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {tab === "one-time" ? "One-Time Gift" : "Recurring Support"}
              </button>
            ))}
          </div>

          {/* Fund Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {givingFunds.map((fund) => (
              <div
                key={fund.id}
                className="p-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group text-left"
              >
                <h4 className="font-bold text-accent group-hover:text-white transition-colors">
                  {fund.label}
                </h4>
                <p className="text-xs text-white/60 mt-1">{fund.description}</p>
              </div>
            ))}
          </div>

          {/* Quick Give Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {[10, 50, 100, 250].map((amount) => (
              <button
                key={amount}
                className="px-6 py-3 rounded-xl border-2 border-accent text-accent font-bold hover:bg-accent hover:text-primary transition-all duration-300"
              >
                ${amount}
              </button>
            ))}
            <Button
              buttonName="Custom Amount"
              color="bg-accent text-primary"
              className="px-8 py-3 rounded-xl font-bold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
