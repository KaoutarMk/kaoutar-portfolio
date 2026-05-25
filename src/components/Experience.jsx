import { motion } from "framer-motion";
import { experiences } from "../data.js";

function getMainImpact(experience) {
  if (experience.company === "Airbus") {
    return [
      "Built software tools for A220 teams",
      "Automated internal workflows with Google Apps Script",
      "Improved efficiency for 170+ engineers"
    ];
  }

  if (experience.company === "VFFICE") {
    return [
      "Designed Microsoft Fabric data pipelines",
      "Worked on data migration, cleaning, and modeling",
      "Integrated AI-assisted analytics automation"
    ];
  }

  return experience.metrics;
}

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24">
      <div className="editorial-line pt-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">
              Experience
            </p>

            <h2 className="mt-4 font-serif text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Work Experience
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted">
            Experience across data engineering, analytics, automation, and full-stack software development.
          </p>
        </div>

        <div className="space-y-5">
          {experiences.map((experience, index) => {
            const impacts = getMainImpact(experience);

            return (
              <motion.article
                key={experience.company}
                className="soft-card group overflow-hidden rounded-[2rem] p-5 transition hover:translate-y-[-3px] hover:shadow-soft md:p-6"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="flex gap-4">
                    {experience.logo && (
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white/65 p-2 shadow-sm">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}

                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-muted">
                        {experience.period}
                      </p>

                      <h3 className="mt-2 font-serif text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-sm text-muted">
                        {experience.company} · {experience.location}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm leading-7 text-muted">
                      {experience.summary}
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {impacts.map((impact) => (
                        <div
                          key={impact}
                          className="rounded-2xl border border-ink/10 bg-white/35 p-4 transition group-hover:bg-white/50"
                        >
                          <p className="text-sm font-medium leading-6 text-ink">
                            {impact}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-ink/10 pt-5">
                  {experience.skills.slice(0, 9).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-ink/10 bg-white/30 px-3 py-1.5 text-xs text-muted transition hover:border-ink/20 hover:bg-white/55 hover:text-ink"
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