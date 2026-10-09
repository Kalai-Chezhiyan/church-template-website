import { useNavigate } from "react-router-dom";
import { Phone, Mail, Clock, Building, Send } from "../../components/icons/Icons";
import SidePanel from "../../components/layout/SidePanel";
import { firebaseService } from "../../services/firebase";
import React, { useState } from "react";
import { useFirestoreData, useFirestoreDocument } from "../../hooks/useFirestoreData";
import { fallbackStaff, fallbackChurchInfo } from "../../screens/home/constants";

export default function Contact() {
  const navigate = useNavigate();
  const { data: staff, loading: loadingStaff } = useFirestoreData("staff", fallbackStaff);
  const { data: churchInfo, loading: loadingInfo } = useFirestoreDocument("general_settings", "contact_info", fallbackChurchInfo);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields.");
      }

      await firebaseService.addDocument("contact_requests", {
        ...formData,
        createdAt: new Date().toISOString(),
        status: "new",
      });

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <SidePanel title="Contact Us" onClose={() => navigate("/")}>
      <div className="space-y-8">
        {/* Contact Form Section */}
        <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-primary">Send us a Message</h3>
            <p className="text-sm text-primary/60">We&apos;d love to hear from you. Please fill out the form below.</p>
          </div>

          {status === "success" ? (
            <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 text-sm flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Your message has been sent successfully! We will get back to you soon.
              <button
                onClick={() => setStatus("idle")}
                className="ml-auto text-green-800 font-bold hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && (
                <div className="p-3 bg-red-50 text-red-600 rounded-xl border border-red-200 text-xs">
                  {errorMessage}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-primary/40 uppercase tracking-wider ml-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full p-3 bg-white border border-primary/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-primary/30"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-primary/40 uppercase tracking-wider ml-1">Lable *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full p-3 bg-white border border-primary/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-primary/30"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-primary/40 uppercase tracking-wider ml-1">Subject</label>
                <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full p-3 bg-white border border-primary/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-primary/30"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-primary/40 uppercase tracking-wider ml-1">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full p-3 bg-white border border-primary/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-primary/30 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3 bg-accent text-primary font-bold rounded-xl hover:bg-white transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Staff Section */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-primary/40 uppercase tracking-widest">Staff Directory</h3>
          <div className="space-y-3">
            {staff?.map((member, index) => (
              <div key={index} className="p-4 bg-accent/5 rounded-xl border border-accent/20 transition-all duration-300 hover:bg-accent/10">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-primary text-sm">{member.name}</p>
                  <span className="text-[10px] text-accent font-bold uppercase">{member.role}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={`tel:${member.phone}`} className="text-xs text-primary/60 hover:text-primary flex items-center gap-2 transition-colors">
                    <Phone className="w-3 h-3 text-accent" /> {member.phone}
                  </a>
                  <a href={`mailto:${member.email}`} className="text-xs text-primary/60 hover:text-primary flex items-center gap-2 transition-colors">
                    <Mail className="w-3 h-3 text-accent" /> {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Church Info */}
        <div className="pt-6 border-t border-primary/10 space-y-4">
          <h3 className="text-xs font-bold text-primary/40 uppercase tracking-widest">General Information</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Building className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <p className="text-sm text-primary/70 leading-relaxed">{churchInfo?.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <p className="text-sm text-primary/70">{churchInfo?.generalEmail}</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <p className="text-sm text-primary/70">{churchInfo?.generalPhone}</p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="p-5 bg-accent/5 rounded-2xl border border-accent/20">
          <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            Service Hours
          </h4>
          <div className="space-y-2">
            {churchInfo?.serviceHours?.map((hour, index) => (
              <div key={index} className="flex justify-between text-xs">
                <span className="text-primary/50">{hour.day}</span>
                <span className="font-medium text-primary">{hour.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SidePanel>
  );
}
