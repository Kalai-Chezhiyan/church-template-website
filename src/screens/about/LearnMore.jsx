import React from "react";
import { useNavigate } from "react-router-dom";
import SidePanel from "../../components/layout/SidePanel";

export default function LearnMore() {
  const navigate = useNavigate();

  const coreValues = [
    {
      title: "Unconditional Love",
      desc: "We believe in welcoming everyone with open arms, reflecting the love that Christ has for all humanity.",
    },
    {
      title: "Faith in Action",
      desc: "Our faith is not just spoken, but lived through community service, outreach, and support for the marginalized.",
    },
    {
      title: "Spiritual Growth",
      desc: "We are committed to the lifelong journey of understanding the Word and growing in our relationship with God.",
    },
    {
      title: "Divine Truth",
      desc: "Guided by the Holy Scriptures, we seek to bring truth, light, and hope to a world in need of redemption.",
    },
  ];

  return (
    <SidePanel title="Learn More" onClose={() => navigate('/')}>
      <div className="space-y-10">
        {/* Mission Statement */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold text-primary/40 uppercase tracking-widest">Our Vision</h3>
          <p className="text-lg leading-relaxed text-primary font-body italic">
            "To be a beacon of hope and a sanctuary of peace, where every soul is nurtured and every heart finds its home in the Divine Love of the Creator."
          </p>
        </section>

        {/* Core Values */}
        <section className="space-y-6">
          <h3 className="text-xs font-bold text-primary/40 uppercase tracking-widest">Core Values</h3>
          <div className="space-y-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group cursor-pointer p-4 rounded-xl transition-all duration-300 hover:bg-accent/10 border-l-2 border-transparent hover:border-accent"
              >
                <div className="flex items-center gap-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-accent font-bold">0{index + 1}.</span>
                  <h4 className="font-bold uppercase tracking-wider text-sm">{value.title}</h4>
                </div>
                <p className="text-sm text-primary/60 mt-2 ml-6 font-body leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ / Guidance */}
        <section className="pt-8 border-t border-primary/10 space-y-6">
          <h3 className="text-xs font-bold text-primary/40 uppercase tracking-widest">Common Questions</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-bold text-primary">What should I expect on my first visit?</p>
              <p className="text-xs text-primary/60 font-body leading-relaxed">
                A warm welcome, inspiring music, and a message of hope. Please feel free to dress comfortably.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-bold text-primary">Are there programs for children?</p>
              <p className="text-xs text-primary/60 font-body leading-relaxed">
                Yes, we have dedicated youth ministry and Sunday school classes tailored for all age groups.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="pt-6 text-center">
          <button
            onClick={() => navigate('/visit')}
            className="px-6 py-3 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-accent/20"
          >
            Plan Your Visit
          </button>
        </div>
      </div>
    </SidePanel>
  );
}
