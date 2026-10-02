import { motion } from "framer-motion";
import { Phone, Mail, Clock, Building, ArrowRight } from "../../components/icons/Icons";
import Button from "../../components/button/button";

const contactStaff = [
  {
    name: "Rev. Samuel Thorne",
    role: "Lead Pastor",
    phone: "+1 (555) 123-4567",
    email: "samuel.thorne@church.org",
  },
  {
    name: "Sarah Jenkins",
    role: "Youth Minister",
    phone: "+1 (555) 234-5678",
    email: "sarah.jenkins@church.org",
  },
  {
    name: "David Miller",
    role: "Community Outreach",
    phone: "+1 (555) 345-6789",
    email: "david.miller@church.org",
  },
];

const churchInfo = {
  address: "123 Faith Lane, Grace City, GC 45678",
  generalEmail: "info@church.org",
  generalPhone: "+1 (555) 000-1111",
  serviceHours: [
    { day: "Sunday", time: "9:00 AM - 12:00 PM" },
    { day: "Wednesday", time: "6:30 PM - 8:00 PM" },
    { day: "Friday", time: "7:00 PM - 9:00 PM" },
  ],
};

export default function Contact({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      className="fixed top-24 right-6 z-[100] w-[350px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
    >
      {/* Header */}
      <div className="p-4 bg-primary text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-accent" />
          <h2 className="text-sm font-bold font-heading">Contact Us</h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
        >
          <span className="text-xs">✕</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-5 overflow-y-auto max-h-[450px]">
        {/* Staff Section */}
        <div className="space-y-3">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Staff Directory</h3>
          <div className="space-y-3">
            {contactStaff.map((staff, index) => (
              <div key={index} className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-bold text-primary text-xs">{staff.name}</p>
                  <span className="text-[10px] text-accent font-medium">{staff.role}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <a href={`tel:${staff.phone}`} className="text-[11px] text-gray-600 hover:text-primary flex items-center gap-1">
                    <Phone className="w-3 h-3 text-accent" /> {staff.phone}
                  </a>
                  <a href={`mailto:${staff.email}`} className="text-[11px] text-gray-600 hover:text-primary flex items-center gap-1">
                    <Mail className="w-3 h-3 text-accent" /> {staff.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Church Info */}
        <div className="pt-3 border-t border-gray-100 space-y-3">
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">General Info</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Building className="w-3 h-3 text-accent mt-0.5 shrink-0" />
              <p className="text-[11px] text-gray-600 leading-tight">{churchInfo.address}</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-accent shrink-0" />
              <p className="text-[11px] text-gray-600">{churchInfo.generalEmail}</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-accent shrink-0" />
              <p className="text-[11px] text-gray-600">{churchInfo.generalPhone}</p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="p-3 bg-warmWhite rounded-xl border border-accent/20">
          <h4 className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1">
            <Clock className="w-3 h-3 text-accent" />
            Service Hours
          </h4>
          <div className="space-y-1">
            {churchInfo.serviceHours.map((hour, index) => (
              <div key={index} className="flex justify-between text-[10px]">
                <span className="text-gray-500">{hour.day}</span>
                <span className="font-medium text-gray-700">{hour.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 bg-gray-50 border-t text-center">
        <button
          onClick={onClose}
          className="w-full py-1.5 bg-primary text-white rounded-lg text-[10px] font-bold uppercase hover:bg-accent transition-colors"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}
