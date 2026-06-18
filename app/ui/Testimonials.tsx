import { testimonials } from "../data/siteContent";

export function Testimonials() {
  return (
    <div className="testimonial-grid">
      {testimonials.map((item) => (
        <article className="testimonial" key={item.name}>
          <p>&quot;{item.quote}&quot;</p>
          <strong>{item.name}</strong>
          <span>
            {item.country} / {item.source}
          </span>
        </article>
      ))}
    </div>
  );
}
