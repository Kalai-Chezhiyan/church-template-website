import React, { useState } from "react";
import Button from "../button/button";
import { useFirestoreDocument } from "../../hooks/useFirestoreData";
import { visitData as fallbackVisitData } from "../../screens/home/constants";

export default function PlanVisit() {
  const [openIndex, setOpenIndex] = useState(null);
  const { data: visitData, loading } = useFirestoreDocument("general_settings", "info", fallbackVisitData);

  if (loading) {
    return (
      <div className="w-full py-24 px-6 flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="w-full py-24 px-6 bg-warmWhite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            New Here?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 md:mb-8 text-primary leading-[1.1]">
            Plan Your Visit
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed font-body">
            We can't wait to welcome you home. Here is everything you need to know about visiting our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Service Times & Location */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold font-heading text-primary mb-6">Service Times</h3>
            <div className="space-y-4">
              {visitData?.serviceTimes?.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-warmWhite border-l-4 border-accent">
                  <div>
                    <p className="font-bold text-primary">{item.day}</p>
                    <p className="text-sm text-gray-500">{item.type}</p>
                  </div>
                  <p className="font-heading text-lg text-primary">{item.time}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary text-white rounded-2xl">
              <h4 className="font-bold mb-2">Our Location</h4>
              <p className="text-sm opacity-80">{visitData?.address || "123 Divine Way, Faith City, FC 12345"}</p>
              <Button
                buttonName="Get Directions"
                color="bg-accent text-primary"
                className="mt-4 w-full py-2 text-sm"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-primary mb-6">What to Expect</h3>
            <div className="space-y-4">
              {visitData?.faqs?.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:border-accent/50">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-primary hover:bg-gray-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className={`transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {openIndex === idx && (
                    <div className="px-6 pb-4 text-gray-600 font-body text-sm leading-relaxed animate-in fade-in slide-in-from-top-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
