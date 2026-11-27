import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our Shop", href: "#shop" },
  { label: "Product Details", href: "#trending" },
  { label: "Contact Us", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all ${
        scrolled ? "bg-main rounded-b-3xl shadow-lg py-2" : "py-4"
      }`}
    >
      <div className="max-w-[1620px] mx-auto px-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-4 text-3xl font-bold">
          <svg width="76" height="76" viewBox="0 0 100 100" className={scrolled ? "w-[52px]" : "w-[76px]"}>
            <circle cx="50" cy="50" r="50" fill="white" />
            <path d="M25 25 L75 75 M75 25 L25 75" stroke="#0073ff" strokeWidth="14" />
          </svg>
          <span className={scrolled ? "text-xl" : "text-3xl"}>LUGX</span>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-6 py-3 rounded-full ${index === 0 ? "bg-white/15" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <button type="button" className="ml-4 bg-pink px-6 py-3 rounded-full font-semibold">
            SIGN IN
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
