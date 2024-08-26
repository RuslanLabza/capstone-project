import './SpecialsSection.css';
import greekSalad from '../../assets/images/greek_salad.jpg';
import bruschetta from '../../assets/images/bruchetta.svg';
import lemonDessert from '../../assets/images/lemon_dessert.jpg';

export default function SpecialsSection() {
  const weekSpecials = [
    {
      image: greekSalad,
      name: 'Greek Salad',
      price: '$12.99',
      description:
        'The famous Greek salad with crisp lettuce, olives, and feta cheese.',
    },
    {
      image: bruschetta,
      name: 'Bruschetta',
      price: '$5.99',
      description:
        'Grilled bread with garlic, topped with tomatoes, olive oil, and basil.',
    },
    {
      image: lemonDessert,
      name: 'Lemon Dessert',
      price: '$5.00',
      description:
        'A delicious lemon dessert with creamy layers and a crunchy crust.',
    },
  ];

  return (
    <section className="specials-section">
      <div className="container specials-section-container">
        <div className="special-header-container">
          <h2>This week specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="special-items-container">
          {weekSpecials.map((item) => (
            <div className="special-item">
              <div class="special-item-image-container">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="special-item-description">
                <div className="special-header-container">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <p>{item.description}</p>
                <button>Order a delivery</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
