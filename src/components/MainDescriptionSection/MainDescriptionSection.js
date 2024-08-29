import './MainDescriptionSection.css';
import image from '../../assets/images/restauranfood.jpg';
import LinkButton from '../LinkButton/LinkButton';

export default function MainDescription() {
  return (
    <section
      className="description-section"
      aria-labelledby="description-title"
    >
      <div className="container description-section-container">
        <div className="description-section-text">
          <h1 id="description-title">Little Lemon</h1>
          <p className="description-section-city">Chicago</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <LinkButton
            style={{ padding: '10px 20px' }}
            to="/reservations"
            aria-label="Reserve a table at Little Lemon"
            role="button"
          >
            Reserve a Table
          </LinkButton>
        </div>
        <div className="description-section-image-container">
          <img
            className="description-section-image"
            src={image}
            alt="Delicious dish from Little Lemon restaurant"
          />
        </div>
      </div>
    </section>
  );
}
