import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaReact,
  FaServer,
  FaTools,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: FaCode,
    color: "text-blue-400",
    skills: ["TypeScript", "Python", "JavaScript", "Java", "SQL", "PHP"],
  },
  {
    title: "Frontend Development",
    icon: FaReact,
    color: "text-cyan-400",
    skills: ["React.js", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend & APIs",
    icon: FaServer,
    color: "text-purple-400",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT",
      "Socket.IO",
    ],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    color: "text-emerald-400",
    skills: ["PostgreSQL", "MySQL", "Prisma ORM", "Database Design"],
  },
  {
    title: "Machine Learning",
    icon: FaBrain,
    color: "text-pink-400",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    color: "text-orange-400",
    skills: [
      "Android",
      "Java",
      "Kotlin Concepts",
      "Android Studio",
      "Retrofit",
      "XML Layouts",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: FaTools,
    color: "text-yellow-400",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Jupyter Notebook",
      "phpMyAdmin",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Technical Skills
          </p>

          <h2 className="max-w-4xl text-4xl font-bold text-white md:text-5xl">
            Technologies I use across full-stack, mobile, and machine learning
            development.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-blue-500/40"
              >
                <Icon className={`mb-5 text-3xl ${group.color}`} />

                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;