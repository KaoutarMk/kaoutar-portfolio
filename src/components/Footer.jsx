export default function Footer() {
  return (
    <footer className="section-shell pb-8">
      <div className="editorial-line flex flex-col justify-between gap-3 pt-6 text-xs uppercase tracking-[0.22em] text-muted md:flex-row">
        <p>Designed and built by Kaoutar Machouat</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
