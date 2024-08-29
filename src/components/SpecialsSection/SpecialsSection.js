import './SpecialsSection.css';
import SpecialItem from './SpecialItem';
import greekSalad from '../../assets/images/greek_salad.jpg';
import bruschetta from '../../assets/images/bruchetta.svg';
import lemonDessert from '../../assets/images/lemon_dessert.jpg';
import LinkButton from '../LinkButton/LinkButton';

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
    <section className="specials-section" aria-labelledby="specials-title">
      <div className="container specials-section-container">
        <div className="special-header-container">
          <h2 id="specials-title">This week specials!</h2>
          <LinkButton
            style={{ padding: '20px 30px' }}
            to="/menu"
            aria-label="View full online menu"
            role="button"
          >
            Online Menu
          </LinkButton>
        </div>
        <div className="special-items-container" role="list">
          {weekSpecials.map((item) => (
            <SpecialItem {...item} key={item.name} role="listitem" />
          ))}
        </div>
      </div>
    </section>
  );
}
