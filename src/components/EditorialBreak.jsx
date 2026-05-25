import { motion } from "framer-motion";

export default function EditorialBreak() {
  return (
    <section className="section-shell py-24">
      <motion.div
        className="relative overflow-hidden rounded-[2.5rem] border border-ink/10 bg-ink px-7 py-16 text-center text-cream shadow-soft md:px-12 md:py-24"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.65 }}
      >
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blush/20 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-120px] h-96 w-96 rounded-full bg-clay/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <blockquote className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-7xl">
            “Let the beauty of what you love be what you do.”
          </blockquote>

          <p className="mt-6 text-sm uppercase tracking-[0.24em] text-cream/55">
            Jalaludin Rumi
          </p>

          <div className="mx-auto my-8 h-px w-28 bg-cream/20" />

          <p className="mx-auto max-w-2xl text-base leading-8 text-cream/70 md:text-lg">
            I care about work that feels intentional, useful, and quietly well
            designed.
          </p>
        </div>
      </motion.div>
    </section>
  );
}