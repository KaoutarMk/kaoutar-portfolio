import { ArrowUpRight, Mail, MapPin, Phone, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contact } from "../data.js";


export default function Contact() {
  return (
    <section id="contact" className="section-shell py-24">
      <div className="editorial-line pt-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_0.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">Contact</p>
            <h2 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              <h2 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Where ideas can continue
              </h2>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
              If my work or perspective feels aligned with what you’re building, let’s connect.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${contact.email}`} className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition hover:translate-y-[-2px] hover:shadow-soft">
                Send Email <ArrowUpRight size={17} />
              </a>
              <a href="/resume.pdf" download className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition hover:border-ink">
                Download Resume <Download size={17} />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition hover:border-ink">
                LinkedIn <FaLinkedinIn size={17} />
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition hover:border-ink">
                GitHub <FaGithub size={17} />
              </a>
            </div>
          </div>

          <aside className="soft-card rounded-[2rem] p-6">
            <h3 className="font-serif text-3xl font-semibold tracking-[-0.03em]">Details</h3>
            <div className="mt-6 space-y-4">
              <a href={`mailto:${contact.email}`} className="focus-ring flex items-start gap-3 rounded-2xl p-2 transition hover:bg-white/30">
                <Mail className="mt-1 shrink-0" size={18} />
                <span><span className="block text-xs uppercase tracking-[0.18em] text-muted">Email</span><span className="text-sm">{contact.email}</span></span>
              </a>
              <a href={`tel:${contact.phone.replaceAll("-", "")}`} className="focus-ring flex items-start gap-3 rounded-2xl p-2 transition hover:bg-white/30">
                <Phone className="mt-1 shrink-0" size={18} />
                <span><span className="block text-xs uppercase tracking-[0.18em] text-muted">Phone</span><span className="text-sm">{contact.phone}</span></span>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="focus-ring flex items-start gap-3 rounded-2xl p-2 transition hover:bg-white/30">
                <FaLinkedinIn className="mt-1 shrink-0" size={18} />
                <span><span className="block text-xs uppercase tracking-[0.18em] text-muted">LinkedIn</span><span className="text-sm">linkedin.com/in/kaoutar-machouat</span></span>
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="focus-ring flex items-start gap-3 rounded-2xl p-2 transition hover:bg-white/30">
                <FaGithub className="mt-1 shrink-0" size={18} />
                <span><span className="block text-xs uppercase tracking-[0.18em] text-muted">GitHub</span><span className="text-sm">github.com/KaoutarMk</span></span>
              </a>
              <div className="flex items-start gap-3 rounded-2xl p-2">
                <MapPin className="mt-1 shrink-0" size={18} />
                <span><span className="block text-xs uppercase tracking-[0.18em] text-muted">Location</span><span className="text-sm">{contact.location}</span></span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
