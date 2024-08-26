import './AdditionalInfo.css';
import imageA from '../../assets/images/Mario and Adrian A.jpg';
import imageB from '../../assets/images/Mario and Adrian b.jpg';

export default function AdditionalInfo() {
  return (
    <section className="additional-info-section">
      <div className="container additional-info-section-container">
        <div className='additional-info-description'>
          <h2>Little Lemon</h2>
          <p>Chicago</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className='additional-info-image-container'>
          <img src={imageA} className='additional-info-image-a' alt='Mario and Andiron' />
          <img src={imageB} className='additional-info-image-b' alt='Mario and Andiron' />
        </div>
      </div>
    </section>
  );
}
