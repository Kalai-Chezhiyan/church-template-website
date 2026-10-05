import { useNavigate } from "react-router-dom";
import { Phone, Mail, Clock, Building } from "../../components/icons/Icons";
import SidePanel from "../../components/layout/SidePanel";

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

export default function Contact() {
  const navigate = useNavigate();
  return (
    <SidePanel title="Contact Us" onClose={() => navigate('/')}>
      <div className="space-y-8">
        {/* Staff Section */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-primary/40 uppercase tracking-widest">Staff Directory</h3>
          <div className="space-y-3">
            {contactStaff.map((staff, index) => (
              <div key={index} className="p-4 bg-accent/5 rounded-xl border border-accent/20 transition-all duration-300 hover:bg-accent/10">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-primary text-sm">{staff.name}</p>
                  <span className="text-[10px] text-accent font-bold uppercase">{staff.role}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={`tel:${staff.phone}`} className="text-xs text-primary/60 hover:text-primary flex items-center gap-2 transition-colors">
                    <Phone className="w-3 h-3 text-accent" /> {staff.phone}
                  </a>
                  <a href={`mailto:${staff.email}`} className="text-xs text-primary/60 hover:text-primary flex items-center gap-2 transition-colors">
                    <Mail className="w-3 h-3 text-accent" /> {staff.email}
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
              <p className="text-sm text-primary/70 leading-relaxed">{churchInfo.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <p className="text-sm text-primary/70">{churchInfo.generalEmail}</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <p className="text-sm text-primary/70">{churchInfo.generalPhone}</p>
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
            {churchInfo.serviceHours.map((hour, index) => (
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
