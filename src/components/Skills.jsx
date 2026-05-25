import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { skillGroups } from "../data.js";

const skillLogos = {
  Python: "/tech/python.svg",
  Java: "/tech/java.svg",
  JavaScript: "/tech/javascript.svg",
  TypeScript: "/tech/typescript.svg",
  React: "/tech/react.svg",
  "Node.js": "/tech/nodejs.svg",
  "Express.js": "/tech/express.svg",
  SQL: "/tech/sql.svg",
  GitHub: "/tech/github.svg",
  Git: "/tech/git.svg",
  "Power BI": "/tech/powerbi.svg",
  "Microsoft Fabric": "/tech/fabric.svg",
  "Azure DevOps": "/tech/azuredevops.svg",
  PyTorch: "/tech/pytorch.svg",
  "Scikit-learn": "/tech/scikitlearn.svg",
  Pandas: "/tech/pandas.svg",
  NumPy: "/tech/numpy.svg",
  "Qlik Sense": "/tech/qlik.svg",
  C: "/tech/c.svg",
  "C#": "/tech/c#.svg"
};

function SkillLogo({ skill }) {
  const logo = skillLogos[skill];

  if (!logo) return null;

  return (
    <img
      src={logo}
      alt=""
      aria-hidden="true"
      className="h-5 w-5 shrink-0 object-contain"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

function SkillPill({ skill }) {
  return (
    <span className="inline-flex min-h-[34px] items-center justify-center gap-2 rounded-full border border-ink/10 bg-white/35 px-3.5 py-1 text-center text-xs font-medium leading-none text-muted transition hover:border-ink/20 hover:bg-white/55 hover:text-ink">
      <SkillLogo skill={skill} />
      {skill}
    </span>
  );
}

function FeaturedSkillBox({ skill }) {
  return (
    <div className="flex min-h-[78px] items-center justify-center gap-2 rounded-2xl border border-ink/10 bg-white/35 px-4 py-3 text-center text-sm font-semibold leading-snug text-ink transition hover:scale-[1.02] hover:border-ink/20 hover:bg-white/55">
      <SkillLogo skill={skill} />
      <span>{skill}</span>
    </div>
  );
}

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = skillGroups[activeIndex];

  return (
    <section id="skills" className="section-shell py-24">
      <div className="editorial-line pt-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">
              Skills
            </p>

            <h2 className="mt-4 font-serif text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Tools and technologies
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted">
            Choose a category to explore the tools and concepts I work with.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="grid gap-3">
            {skillGroups.map((group, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`focus-ring group rounded-[1.5rem] border p-5 text-left transition ${
                    isActive
                      ? "border-ink/25 bg-ink text-cream shadow-soft"
                      : "border-ink/10 bg-white/25 text-ink hover:border-ink/20 hover:bg-white/45"
                  }`}
                >
                  <span className="font-serif text-2xl font-semibold tracking-[-0.03em]">
                    {group.title}
                  </span>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.featured.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className={`inline-flex min-h-[30px] items-center justify-center gap-2 rounded-full border px-3 py-1 text-center text-xs font-medium leading-none ${
                          isActive
                            ? "border-cream/15 bg-cream/10 text-cream/80"
                            : "border-ink/10 bg-white/40 text-muted"
                        }`}
                      >
                        <SkillLogo skill={item} />
                        {item}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="soft-card min-h-[360px] rounded-[2rem] p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28 }}
              >
                <p className="text-xs uppercase tracking-[0.24em] text-muted">
                  Selected area
                </p>

                <h3 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                  {activeGroup.title}
                </h3>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {activeGroup.featured.map((skill) => (
                    <FeaturedSkillBox key={skill} skill={skill} />
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {activeGroup.items.map((skill) => (
                    <SkillPill key={skill} skill={skill} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}