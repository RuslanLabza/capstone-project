import './TestimonialsSection.css';
import Testimonial from './Testimonial';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <Testimonial rating="★★★★☆" name="Customer 1" />
      <Testimonial rating="★★★★★" name="Customer 2" />
      <Testimonial rating="★★★☆☆" name="Customer 3" />
    </section>
  );
}
