import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const points = [
    "Developed and maintained internal tools and workflow automation using JavaScript, SQL, and Excel-based automation.",
    "Configured, integrated, and supported enterprise Point-of-Sale applications during high-volume campus events.",
    "Built data-processing workflows for inventory validation, transaction reporting, and operational accuracy.",
    "Developed SQL queries and reports to monitor inventory levels and reconcile transactions.",
    "Configured user accounts, permissions, and authentication settings for internal systems.",
    "Performed functional testing, debugging, and validation following software updates.",
    "Created technical documentation, workflow diagrams, and support procedures.",
  ];

  return (
    <section id="experience" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Technical experience supporting applications, data, and operational
            systems.
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-5">
              <div className="h-fit rounded-2xl bg-blue-500/10 p-4">
                <FaBriefcase className="text-3xl text-blue-400" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Student Worker
                </h3>

                <p className="mt-2 text-lg font-medium text-blue-400">
                  UMass Lowell — Tsongas Center
                </p>

                <p className="mt-2 text-slate-500">May 2025 – May 2026</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "SQL",
                "Enterprise POS",
                "APIs",
                "RDBMS",
                "Testing",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li
                key={point}
                className="flex gap-3 leading-7 text-slate-300"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}

export default Experience;