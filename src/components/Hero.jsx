import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contact } from "../data.js";

export default function Hero() {
  return (
    <section id="home" className="section-shell pt-28 md:pt-36">
      <div className="editorial-line mb-6 flex flex-wrap items-center justify-between gap-3 pt-4 text-xs uppercase tracking-[0.26em] text-muted">
        <span>{contact.location}</span>
        <span>Data & Software</span>
        <span>Available for internships</span>
      </div>

      <div className="grid min-h-[calc(100vh-9rem)] items-center gap-10 py-12 lg:grid-cols-[1.18fr_0.82fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

          <h1 className="font-serif text-[4.7rem] font-semibold leading-[0.86] tracking-[-0.06em] sm:text-[6.4rem] lg:text-[8.8rem]">
            Kaoutar<br />Machouat
          </h1>

          {/*<p className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            Data Engineering · Analytics · Software Development
          </p>*/}

          <p className="mt-5 max-w-2xl text-2xl font-light leading-10 text-ink md:text-3xl">
            Good ideas deserve good structure.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition hover:translate-y-[-2px] hover:shadow-soft">
              View Projects <ArrowUpRight size={17} />
            </a>
            <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition hover:border-ink">Contact Me</a>
            <a href="/resume.pdf" download className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition hover:border-ink">
              Resume <Download size={17} />
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-medium transition hover:border-ink">
              <FaGithub size={17} /> GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-medium transition hover:border-ink">
              <FaLinkedinIn size={17} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="soft-card relative overflow-hidden rounded-[2.5rem] p-4 shadow-soft sm:p-6">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/10 bg-gradient-to-br from-blush via-cream to-linen">
              <img
                src="/profile.jpg"
                alt="Portrait of Kaoutar Machouat"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
