import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "../data.js";

function CertificationCard({ cert, index, duplicated = false }) {
  return (
    <motion.article
      key={`${cert.title}-${index}-${duplicated ? "copy" : "main"}`}
      className="group soft-card flex min-h-[390px] w-[78vw] max-w-[330px] shrink-0 flex-col justify-between rounded-[2rem] p-5 transition hover:translate-y-[-4px] hover:shadow-soft sm:w-[320px]"
      initial={duplicated ? false : { opacity: 0, y: 24 }}
      whileInView={duplicated ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      aria-hidden={duplicated ? "true" : "false"}
    >
      <div>
        <div className="overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/50 p-4">
          <img
            src={cert.image}
            alt={cert.title}
            className="mx-auto h-40 w-auto object-contain transition duration-700 group-hover:scale-[1.04]"
          />
        </div>

        <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted">
          {cert.short}
        </p>

        <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight tracking-[-0.03em]">
          {cert.title}
        </h3>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {cert.note ? (
          <span className="inline-flex w-fit rounded-full border border-ink/10 bg-white/35 px-3 py-1.5 text-sm text-muted">
            {cert.note}
          </span>
        ) : (
          <span className="inline-flex w-fit rounded-full border border-ink/10 bg-white/35 px-3 py-1.5 text-sm text-muted">
            Completed
          </span>
        )}

        {cert.certificateUrl ? (
          <a
            href={cert.certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 bg-ink px-3 py-1.5 text-sm text-cream transition hover:bg-cream hover:text-ink"
          >
            View Certificate
            <ArrowUpRight size={14} />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell py-24">
      <div className="editorial-line pt-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">
              Certifications
            </p>

            <h2 className="mt-4 font-serif text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              Microsoft credentials
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-7 text-muted">
              Certifications that support my work across cloud, security, AI, and the Microsoft data ecosystem.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted">
              Hover to pause
            </p>
          </div>
        </div>

        <div className="cert-marquee relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-cream via-cream/70 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-cream via-cream/70 to-transparent" />

          <div className="cert-marquee-track flex w-max gap-5 py-2">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={`main-${cert.title}`}
                cert={cert}
                index={index}
              />
            ))}

            {certifications.map((cert, index) => (
              <CertificationCard
                key={`copy-${cert.title}`}
                cert={cert}
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