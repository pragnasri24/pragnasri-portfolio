import { motion } from "framer-motion";
import { FaBookOpen, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

function Education() {
  const courses = [
    "Software Engineering",
    "Machine Learning",
    "Database Systems",
    "Algorithms & Data Structures",
    "Mobile Development",
    "Web Development",
  ];

  return (
    <section id="education" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Academic foundation in computer science and software development.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex gap-5">
              <div className="h-fit rounded-2xl bg-blue-500/10 p-4">
                <FaGraduationCap className="text-3xl text-blue-400" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Bachelor of Science in Computer Science
                </h3>

                <p className="mt-2 text-lg font-medium text-blue-400">
                  University of Massachusetts Lowell
                </p>

                <div className="mt-4 flex items-center gap-2 text-slate-400">
                  <FaCalendarAlt />
                  <span>May 2026</span>
                </div>

                <p className="mt-4 text-slate-400">
                  GPA: <span className="font-semibold text-white">3.36 / 4.0</span>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-5">
              <p className="text-sm uppercase tracking-wider text-slate-500">
                Work Authorization
              </p>
              <p className="mt-2 text-xl font-bold text-white">F-1 OPT</p>
              <p className="mt-1 text-sm text-slate-400">
                STEM OPT eligible
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-8">
            <div className="mb-5 flex items-center gap-3">
              <FaBookOpen className="text-xl text-purple-400" />
              <h4 className="text-xl font-semibold text-white">
                Relevant Coursework
              </h4>
            </div>

            <div className="flex flex-wrap gap-3">
              {courses.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;