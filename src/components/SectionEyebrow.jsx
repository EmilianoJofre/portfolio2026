export default function SectionEyebrow({ children }) {
  return (
    <div className="section-eyebrow">
      <span className="section-eyebrow__line" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
