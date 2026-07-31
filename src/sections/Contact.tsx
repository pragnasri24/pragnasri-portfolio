import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let&apos;s build something together.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I am actively seeking Software Engineering opportunities. Feel free
            to contact me about roles, projects, or professional collaboration.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.a
            whileHover={{ y: -8 }}
            href="mailto:pragnasrib24@gmail.com"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500"
          >
            <FaEnvelope className="mx-auto mb-4 text-4xl text-blue-400" />
            <h3 className="text-xl font-bold text-white">Email</h3>
            <p className="mt-3 break-all text-slate-400">
              pragnasrib24@gmail.com
            </p>
          </motion.a>

          <motion.a
            whileHover={{ y: -8 }}
            href="https://github.com/pragnasri24"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500"
          >
            <FaGithub className="mx-auto mb-4 text-4xl text-white" />
            <h3 className="text-xl font-bold text-white">GitHub</h3>
            <p className="mt-3 text-slate-400">github.com/pragnasri24</p>
          </motion.a>

          <motion.a
            whileHover={{ y: -8 }}
            href="https://www.linkedin.com/in/pragnasri-bandi-760b86367"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500"
          >
            <FaLinkedin className="mx-auto mb-4 text-4xl text-blue-500" />
            <h3 className="text-xl font-bold text-white">LinkedIn</h3>
            <p className="mt-3 text-slate-400">Connect with me</p>
          </motion.a>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500"
          >
            <FaMapMarkerAlt className="mx-auto mb-4 text-4xl text-red-400" />
            <h3 className="text-xl font-bold text-white">Location</h3>
            <p className="mt-3 text-slate-400">New Hampshire, USA</p>
            <p className="mt-2 text-sm text-slate-500">
              Open to relocation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;