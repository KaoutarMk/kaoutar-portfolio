import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data.js";

const techColors = {
  Python: "bg-[#F4D35E]/35 text-[#5D4A00] border-[#C9A227]/30",
  Flask: "bg-[#E8E8E8]/70 text-[#333333] border-[#BDBDBD]/40",
  Selenium: "bg-[#BDEAC7]/45 text-[#245C35] border-[#78B889]/40",
  BeautifulSoup: "bg-[#D7E8FF]/55 text-[#244C78] border-[#89AED8]/40",
  "Hugging Face": "bg-[#FFE7A8]/55 text-[#765000] border-[#D8A833]/40",
  SQL: "bg-[#CDE7FF]/55 text-[#164B75] border-[#7BAED8]/40",

  PyTorch: "bg-[#FFD1C2]/55 text-[#8A2D17] border-[#E28B72]/40",
  "Scikit-learn": "bg-[#FFE1B8]/60 text-[#7A4300] border-[#D9A05D]/40",

  Java: "bg-[#FFD7D7]/55 text-[#7A1F1F] border-[#D97A7A]/40",
  "Object-Oriented Programming": "bg-[#E8D8FF]/55 text-[#4B2878] border-[#A986D9]/40",
  "Client-Server Architecture": "bg-[#D8F0EE]/55 text-[#235A55] border-[#82BDB7]/40",

  "Node.js": "bg-[#D8EFCB]/60 text-[#2F5F1F] border-[#8DBB73]/40",
  "Express.js": "bg-[#E7E3DA]/70 text-[#4E4638] border-[#B7AA94]/40",
  HTML: "bg-[#FFD5C7]/60 text-[#8A331C] border-[#E5896E]/40",
  CSS: "bg-[#D5E4FF]/60 text-[#1D4780] border-[#7EA4DA]/40",
  JavaScript: "bg-[#FFF1A8]/65 text-[#6A5700] border-[#D4B833]/40",

  DBeaver: "bg-[#E6D8C8]/65 text-[#5C3D25] border-[#B99068]/40"
};

function getTechColor(tech) {
  return techColors[tech] || "bg-white/35 text-muted border-ink/10";
}

function ProjectCard({ project, index, duplicated = false }) {
  return (
    <motion.article
      key={`${project.title}-${index}-${duplicated ? "copy" : "main"}`}
      className="group soft-card flex min-h-[520px] w-[86vw] max-w-[430px] shrink-0 flex-col justify-between rounded-[2rem] p-5 transition hover:translate-y-[-4px] hover:shadow-soft md:w-[420px] md:p-6"
      initial={duplicated ? false : { opacity: 0, y: 26 }}
      whileInView={duplicated ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      aria-hidden={duplicated ? "true" : "false"}
    >
      <div>
        <div className="mb-6 aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-ink/10 bg-gradient-to-br from-blush/70 via-cream to-linen">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} project visual`}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
            />
          ) : (
            <div
              className="flex h-full items-end rounded-[1rem] border border-ink/10 bg-white/20 p-4"
              aria-label={`${project.title} decorative project image placeholder`}
            >
              <p className="font-serif text-3xl leading-none tracking-[-0.04em] text-ink/70">
                {project.title.split(" ")[0]}
              </p>
            </div>
          )}
        </div>

        <p className="text-xs uppercase tracking-[0.22em] text-muted">
          {project.year}
        </p>

        <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-[-0.03em]">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted">
          {project.description}
        </p>

        <p className="mt-4 text-sm leading-7 text-ink">
          {project.focus}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={`${project.title}-${tech}`}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition hover:scale-[1.04] ${getTechColor(
                tech
              )}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.codeUrl ? (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-sm transition group-hover:border-ink"
          >
            View Code <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="inline-flex items-center rounded-full border border-ink/10 px-4 py-2 text-sm text-muted">
            Code available on request
          </span>
        )}

        {project.caseStudyUrl ? (
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-sm transition group-hover:border-ink"
          >
            Case Study <ArrowUpRight size={15} />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-24">
      <div className="editorial-line pt-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.7fr_0.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">
              Projects
            </p>

            <h2 className="mt-4 font-serif text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Selected Projects
            </h2>
          </div>

          <div className="self-end">
            <p className="text-sm leading-7 text-muted">
              A selection of academic and technical projects across machine learning,
              data systems, and full-stack development.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted">
              Hover to pause
            </p>
          </div>
        </div>

        <div className="project-marquee relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-cream via-cream/70 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-cream via-cream/70 to-transparent" />

          <div className="project-marquee-track flex w-max gap-5 py-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={`main-${project.title}`}
                project={project}
                index={index}
              />
            ))}

            {projects.map((project, index) => (
              <ProjectCard
                key={`copy-${project.title}`}
                project={project}
                index={index}
                duplicated
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}