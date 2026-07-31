import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 px-6 pb-16 pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for full-time opportunities
          </div>

          <p className="mb-4 text-lg font-medium text-blue-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Pragnasri Bandi
          </h1>

          <h2 className="mt-5 text-2xl font-semibold leading-tight text-slate-300 md:text-4xl">
            Software Engineer | Full-Stack Developer | AI & Machine Learning
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Computer Science graduate from the University of Massachusetts
            Lowell with hands-on experience building full-stack web
            applications, Android mobile apps, REST API backends, and machine
            learning pipelines.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-400"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/pragnasri24"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-2xl text-slate-400 transition hover:-translate-y-1 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/pragnasri-bandi-760b86367"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-slate-400 transition hover:-translate-y-1 hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:pragnasrib24@gmail.com"
              aria-label="Email"
              className="text-2xl text-slate-400 transition hover:-translate-y-1 hover:text-emerald-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 p-3 shadow-2xl">
              <img
                src="/images/profile.png"
                alt="Pragnasri Bandi in graduation attire"
                className="h-[560px] w-full rounded-2xl object-cover object-center"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/85 p-4 backdrop-blur-md">
                <p className="text-lg font-semibold text-white">
                  Pragnasri Bandi
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  B.S. Computer Science — UMass Lowell
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-300">
                    F-1 OPT
                  </span>

                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;