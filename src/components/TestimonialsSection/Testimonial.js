import image from '../../assets/images/restaurant_chef_B.jpg';

export default function Testimonial({ rating, name, comment }) {
  const starRating = rating
    .replace(/★/g, 'full star')
    .replace(/☆/g, 'empty star');

  return (
    <article className="testimonial-item">
      <p className="testimonial-rating" aria-label={`Rating: ${starRating}`}>
        {rating}
      </p>
      <div className="testimonial-item-container">
        <div className="testimonial-item-image-container">
          <img src={image} alt={`${name}'s profile`} />
        </div>
        <p className="testimonial-name">{name}</p>
      </div>
      <p className="testimonial-comment">{comment}</p>
    </article>
  );
}
