import { ArrowRight, Calendar, MapPin } from "../icons/Icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const EventCard = (props) => {
  const dateStr = String(props.data.date);
  const dateParts = dateStr.split(" ");

  // Expected format: "September 30, 2026"
  // dateParts[0] = "September", dateParts[1] = "30,", dateParts[2] = "2026"

  const fullMonth = dateParts[0] || "";
  const month = fullMonth.substring(0, 3);
  const day = dateParts[1] ? dateParts[1].replace(",", "") : "";
  const year = dateParts[2] || "";

  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 w-full overflow-hidden p-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl md:text-2xl font-bold font-heading text-primary tracking-tight group-hover:text-accent transition-colors duration-500">
            {props.data.title}
          </h3>
          <div className="flex flex-col items-center justify-center bg-accent text-white rounded-lg p-2 min-w-[54px] shadow-sm">
            <span className="text-[10px] uppercase font-bold leading-none opacity-90">
              {month}
            </span>
            <span className="text-xl font-bold leading-none mt-1">
              {day}
            </span>
          </div >
        </div>

        <div className="flex items-center text-gray-500 text-[11px] tracking-wide font-medium bg-gray-50 w-fit px-2 py-1 rounded-md">
          <MapPin className="w-3 h-3 mr-1.5 text-accent" />
          {props.data.location}
        </div>
      </div>

      {/* Schedule Section - Modern Agenda */}
      <div className="space-y-6 mb-10 relative">
        {props.data.schedule.map((item, index) => (
          <div key={index} className="flex items-center gap-1 group/item transition-all duration-500">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-gray-300 group-hover/item:bg-accent transition-colors duration-500 z-10" />
              {index !== props.data.schedule.length - 1 && (
                <div className="w-0.5 h-full bg-gray-100 mt-1" />
              )}
            </div>

            <div className="flex items-center gap-4 p-2 -ml-2 rounded-lg hover:bg-warmWhite transition-colors duration-300 w-full">
              <div className="text-[11px] font-bold text-gray-400 w-16 shrink-0 uppercase tracking-tighter">
                {item.time}
              </div>
              <div className="flex items-center overflow-hidden">
                <div className="text-xs text-gray-600 group-hover/item:text-primary transition-colors duration-500 leading-relaxed truncate">
                  {item.desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action - Styled Button */}
      <div className="mt-auto">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold border border-gray-100 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
        >
          View Details
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
export const ProgramCard = (props) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-500 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={props.data.img}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={props.data.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        {/* Floating Badge */}
        <div className="absolute top-6 left-6 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-accent rounded-full shadow-lg z-10">
          {props.data.title}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 pt-12 flex flex-col items-start text-left">
        <h3 className="text-2xl font-bold font-heading text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
          {props.data.subtitle}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {props.data.description}
        </p>

        {/* Interactive CTA */}
        <div
          onClick={() => navigate(`/program/${props.data.title}`)}
          className="mt-auto relative inline-flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden group/btn cursor-pointer"
        >
          <span className="text-sm font-bold text-primary relative z-10 transition-colors group-hover/btn:text-white">
            View more
          </span>
          <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1 text-primary group-hover/btn:text-white" />
          <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};
