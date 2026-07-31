import { motion } from "framer-motion";
import {
  FaBrain,
  FaExternalLinkAlt,
  FaGithub,
  FaHeadset,
  FaMobileAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "SupportAI",
    category: "Full-Stack Production Platform",
    description:
      "Built and deployed a full-stack customer support platform with a React and TypeScript frontend, Express REST APIs, PostgreSQL, Prisma ORM, JWT authentication, role-based access control, and real-time Socket.IO communication.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "Socket.IO",
    ],
    github: "https://github.com/pragnasri24/SupportAI",
    liveDemo: "https://support-ai-sable.vercel.app",
    icon: FaHeadset,
    iconColor: "text-blue-400",
    featured: true,
  },
  {
    title: "Human Activity Recognition",
    category: "Machine Learning",
    description:
      "Contributed to a machine learning pipeline that classifies physical activities such as walking, sitting, and standing using smartphone and smartwatch accelerometer and gyroscope sensor data.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook",
    ],
    github:
      "https://github.com/Gireeshsai12/human-activity-recognition",
    liveDemo: "",
    icon: FaBrain,
    iconColor: "text-pink-400",
    featured: false,
  },
  {
    title: "Android Student Information System",
    category: "Android & Full-Stack Development",
    description:
      "Built an Android application connected to a MySQL database through PHP REST APIs, supporting authentication, course registration, transcripts, discussion boards, and course evaluations.",
    technologies: [
      "Java",
      "Android",
      "PHP",
      "MySQL",
      "REST APIs",
      "JSON",
      "Android Studio",
    ],
    github: "https://github.com/Gireeshsai12/Phase3",
    liveDemo: "",
    icon: FaMobileAlt,
    iconColor: "text-emerald-400",
    featured: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Featured Projects
          </p>

          <h2 className="max-w-4xl text-4xl font-bold text-white md:text-5xl">
            Applications built across full-stack, mobile, and machine learning.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            These projects demonstrate production deployment, REST API
            development, databases, authentication, real-time communication,
            Android development, and machine learning.
          </p>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-950 p-7 transition hover:border-blue-500/40"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <Icon className={`text-3xl ${project.iconColor}`} />
                  </div>

                  {project.featured && (
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 flex-grow leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-500"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 font-semibold text-slate-300 transition hover:border-blue-400 hover:text-blue-300"
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;