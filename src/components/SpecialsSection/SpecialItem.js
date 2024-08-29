import LinkButton from '../LinkButton/LinkButton';

export default function SpecialItem({ name, image, price, description }) {
  return (
    <article
      className="special-item"
      aria-labelledby={`special-item-${name.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="special-item-image-container">
        <img src={image} alt={`${name} dish`} />
      </div>
      <div className="special-item-description">
        <div className="special-header-container">
          <h3 id={`special-item-${name.replace(/\s+/g, '-').toLowerCase()}`}>
            {name}
          </h3>
          <p aria-label={`Price: ${price}`}>{price}</p>
        </div>
        <p>{description}</p>
        <LinkButton
          style={{ padding: '.5rem' }}
          to="/order"
          role="button"
          aria-label={`Order ${name} for delivery`}
        >
          Order a delivery
        </LinkButton>
      </div>
    </article>
  );
}
