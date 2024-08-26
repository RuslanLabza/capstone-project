import image from '../../assets/images/restaurant_chef_B.jpg';

export default function Testimonial({ rating, name, comment }) {
  return (
    <div className="testimonial-item">
      <p>{rating}</p>
      <div className="testimonial-item-container">
        <div className="testimonial-item-image-container">
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
      </div>
      <p>{comment}</p>
    </div>
  );
}
