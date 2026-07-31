import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-xl font-bold text-white">
            Pragnasri Bandi<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Software Engineer | Full-Stack Developer | AI & Machine Learning
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/pragnasri24"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-xl text-slate-400 transition hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pragnasri-bandi-760b86367"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-xl text-slate-400 transition hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:pragnasrib24@gmail.com"
            aria-label="Email"
            className="text-xl text-slate-400 transition hover:text-emerald-400"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 Pragnasri Bandi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;