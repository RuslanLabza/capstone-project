export default function Testimonial({ rating, name }) {
  return (
    <div className="testimonial-item">
      <div className="image-placeholder">Image Placeholder</div>
      <p>Rating: {rating}</p>
      <p>{name}</p>
    </div>
  );
}
