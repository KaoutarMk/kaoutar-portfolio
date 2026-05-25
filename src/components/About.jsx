import { motion } from "framer-motion";

const notes = [
  {
    label: "Studies",
    value: "Computer Science Co-op at Concordia University"
  },
  {
    label: "Focus",
    value: "Data engineering, analytics pipelines, and business intelligence"
  },
  {
    label: "Building",
    value: "Scalable systems that turn data into actionable insights"
  },
  {
    label: "Beyond Code",
    value: "Fashion, design, and the intersection of aesthetics with function"
  }
];

const tags = ["Data Engineering", "Analytics", "ML/AI", "Automation", "BI Tools", "ETL Pipelines"];

export default function About() {
  return (
    <section id="about" className="section-shell py-24">
      <div className="editorial-line pt-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">
              About
            </p>

            <h2 className="mt-4 font-serif text-5xl font-semibold leading-none tracking-[-0.04em] md:text-6xl">
              Building systems that scale.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted">
            A quick view of what I’m learning, building, and naturally drawn to.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            className="soft-card rounded-[2rem] p-6 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl leading-10 text-ink md:text-3xl md:leading-[1.3]">
              Hi, I'm Kaoutar, a Computer Science student in Montreal with a core interest in data engineering and analytics.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              I build pipelines, design data models, and create BI solutions that help 
              organizations make better decisions. My work spans ETL workflows, dashboard 
              development, and Automation that transforms raw data into value.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              Outside of engineering, I'm interested in fashion and visual design, not as 
              a career path, but as a creative outlet and lens for understanding how form 
              and function intersect.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink/10 bg-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-muted transition-all duration-200 hover:border-ink/25 hover:bg-blush/40 hover:text-ink hover:shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            {notes.map((note) => (
              <div
                key={note.label}
                className="soft-card group rounded-[1.6rem] p-5 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    {note.label}
                  </p>

                  <span className="h-2.5 w-2.5 rounded-full bg-clay/50 transition-all duration-200 group-hover:scale-[1.4] group-hover:bg-ink/60" />
                </div>

                <p className="text-sm leading-[1.65] text-ink">{note.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}