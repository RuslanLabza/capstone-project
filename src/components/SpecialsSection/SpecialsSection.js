import './SpecialsSection.css';

export default function SpecialsSection() {
  return (
    <section className="specials-section">
      <div className='container specials-section-container'>
      <h2>Specials</h2>
      <div className="special-item">
        <div className="image-placeholder">Image Placeholder</div>
        <h3>Greek Salad</h3>
        <p>$12.99</p>
        <p>
          The famous Greek salad with crisp lettuce, olives, and feta cheese.
        </p>
        <button>Order a delivery</button>
      </div>
      <div className="special-item">
        <div className="image-placeholder">Image Placeholder</div>
        <h3>Bruschetta</h3>
        <p>$5.99</p>
        <p>
          Grilled bread with garlic, topped with tomatoes, olive oil, and basil.
        </p>
        <button>Order a delivery</button>
      </div>
      <div className="special-item">
        <div className="image-placeholder">Image Placeholder</div>
        <h3>Lemon Dessert</h3>
        <p>$5.00</p>
        <p>A delicious lemon dessert with creamy layers and a crunchy crust.</p>
        <button>Order a delivery</button>
      </div>
      </div>
    </section>
  );
}
