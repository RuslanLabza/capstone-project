import './AdditionalInfoSection.css';
import imageA from '../../assets/images/Mario and Adrian A.jpg';
import imageB from '../../assets/images/Mario and Adrian b.jpg';

export default function AdditionalInfoSection() {
  return (
    <section
      className="additional-info-section"
      aria-labelledby="additional-info-title"
    >
      <div className="container additional-info-section-container">
        <div className="additional-info-description">
          <h2 id="additional-info-title">Little Lemon</h2>
          <p>Chicago</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div
          className="additional-info-image-container"
          aria-label="Images of Mario and Adrian"
        >
          <img
            src={imageA}
            className="additional-info-image-a"
            alt="Mario and Adrian cooking in the kitchen"
          />
          <img
            src={imageB}
            className="additional-info-image-b"
            alt="Mario and Adrian smiling in the restaurant"
          />
        </div>
      </div>
    </section>
  );
}
