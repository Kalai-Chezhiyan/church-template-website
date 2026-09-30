import { Menu } from "../icons/Icons";

export default function Header() {
  const leftValues = ["Our Church", "Donations"];
  const rightValues = ["Events", "All Pages", "Contact Us"];

  return (
    <header className="w-full px-6 py-6 absolute top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-white/90">
          {leftValues.map((value) => (
            <a
              key={value}
              href="#"
              className="hover:text-accent transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] hover:-translate-y-1 hover:scale-110 inline-block"
            >
              {value}
            </a>
          ))}
        </div>

        {/* Logo / Brand */}
        <div className="text-2xl font-bold tracking-tighter text-white font-heading cursor-pointer transition-all duration-300 hover:text-accent hover:drop-shadow-[0_0_20px_rgba(212,175,55,1)] hover:-translate-y-1 hover:scale-110">
          RELIGIOUS
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-white/90">
          {rightValues.map((value) => (
            <a
              key={value}
              href="#"
              className="hidden md:block hover:text-accent transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] hover:-translate-y-1 hover:scale-110 inline-block"
            >
              {value}
            </a>
          ))}
          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white cursor-pointer">
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </nav>
    </header>
  );
}
