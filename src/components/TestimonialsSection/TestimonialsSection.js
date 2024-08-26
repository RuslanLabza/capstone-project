import './TestimonialsSection.css';
import Testimonial from './Testimonial';

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: '★★★★☆',
      name: 'Customer 1',
      comment: 'Lorem ipsum dolor sit amet',
    },
    {
      rating: '★★★★★',
      name: 'Customer 2',
      comment: 'Adipiscing elit sed',
    },
    {
      rating: '★★★☆☆',
      name: 'Customer 3',
      comment: 'Eiusmod tempor incididunt',
    },
    {
      rating: '★★☆☆☆',
      name: 'Customer 4',
      comment: 'Ut labore et dolore',
    },
  ];
  return (
    <section className="testimonials-section">
      <div className="container testimonials-section-container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <Testimonial {...testimonial} key={testimonial.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
