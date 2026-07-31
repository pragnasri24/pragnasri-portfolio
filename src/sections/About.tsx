import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="max-w-4xl text-4xl font-bold text-white md:text-5xl">
            Building reliable software across web, mobile, APIs, and machine
            learning.
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-950 p-8"
          >
            <p className="text-lg leading-8 text-slate-300">
              I am a Computer Science graduate from the University of
              Massachusetts Lowell currently based in New Hampshire.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              My experience includes building production React and TypeScript
              applications, Node.js and Express REST APIs, PostgreSQL and MySQL
              systems, Android applications, and machine learning pipelines.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              My flagship project is SupportAI, a live full-stack customer
              support platform built with React, TypeScript, Express,
              PostgreSQL, Prisma ORM, JWT authentication, and Socket.IO.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              I am seeking a full-time Software Engineering opportunity where I
              can contribute to meaningful products and continue growing as an
              engineer.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Full-Stack Development",
                "Backend Engineering",
                "Android Development",
                "Machine Learning",
                "Database Systems",
              ].map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <FaGraduationCap className="mb-5 text-3xl text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
              <p className="mt-2 text-slate-400">
                B.S. in Computer Science
              </p>
              <p className="mt-1 text-sm text-slate-500">
                University of Massachusetts Lowell
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <FaLaptopCode className="mb-5 text-3xl text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Focus</h3>
              <p className="mt-2 text-slate-400">
                Full-stack, backend, Android, and machine learning
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <FaCode className="mb-5 text-3xl text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">
                Featured Projects
              </h3>
              <p className="mt-2 text-3xl font-bold text-white">3</p>
              <p className="mt-1 text-sm text-slate-500">
                Production, ML, and Android projects
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <FaMapMarkerAlt className="mb-5 text-3xl text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Location</h3>
              <p className="mt-2 text-slate-400">New Hampshire, USA</p>
              <p className="mt-1 text-sm text-slate-500">
                Open to relocation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;