import './MainDescription.css';
import image from '../../assets/images/restauranfood.jpg';

export default function MainDescription() {
  return (
    <section className="description-section">
      <div className="container description-section-container">
        <div className="description-section-text">
          <h1>Little Lemon</h1>
          <p className="description-section-city">Chicago</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="description-section-image-container">
          <img
            className="description-section-image"
            src={image}
            alt="bruskest"
          />
        </div>
      </div>
    </section>
  );
}
