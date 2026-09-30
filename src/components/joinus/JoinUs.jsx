import React from "react";
import Button from "../button/button";

export default function JoinUs() {
  return (
    <section className="w-full py-24 px-6 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
          Ready to Walk with Us?
        </h2>
        <p className="text-white/80 text-lg mb-10 font-body leading-relaxed">
          Whether you are a lifelong believer or just starting to ask questions about faith, there is a place for you here. Come as you are.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            buttonName="Plan Your Visit"
            color="bg-accent text-primary"
            className="px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all"
          />
          <Button
            buttonName="Become a Member"
            color="bg-transparent text-white border border-white"
            className="px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all"
          />
        </div>
      </div>
    </section>
  );
}
