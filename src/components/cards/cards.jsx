import { ArrowRight, Calendar, MapPin } from "../icons/Icons";
import { useNavigate } from "react-router-dom";

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
    <div className="group flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-accent/30">
      <div className="overflow-hidden rounded-xl mb-6 relative">
        <img
          src={props.data.img}
          className="h-48 w-48 max-w-full h-auto object-cover transition-transform duration-700 group-hover:scale-125"
          alt={props.data.title}
        />
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
      </div>
      <div className="mb-3 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-full transition-all duration-300 group-hover:bg-accent group-hover:text-white">
        {props.data.title}
      </div>
      <h3 className="mb-3 text-xl font-bold font-heading text-primary leading-tight transition-colors duration-300 group-hover:text-accent">
        {props.data.subtitle}
      </h3>
      <p className="mb-6 text-sm text-gray-600 leading-relaxed line-clamp-4 px-2 transition-colors duration-300 group-hover:text-gray-800">
        {props.data.description}
      </p>
      <button
        onClick={() => navigate(`/program/${props.data.title}`)}
        className="mt-auto text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-1 group/link"
      >
        View more
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </button>
    </div>
  );
};
