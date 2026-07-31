const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-white">
          Pragnasri<span className="text-blue-500">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;