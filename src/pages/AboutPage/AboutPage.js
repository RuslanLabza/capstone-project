import './AboutPage.css';
import UnderDevelopment from '../../components/UnderDevelopment/UnderDevelopment';

export default function AboutPage() {
  return (
    <div className="container">
      <UnderDevelopment title="About Little Lemon">
      <p><strong>Note:</strong> This About page is still being developed.</p>
      <p>Future content will include:</p>
      <ul>
        <li>Our restaurant's history</li>
        <li>Information about our chefs</li>
        <li>Our commitment to fresh, local ingredients</li>
        <li>Photo gallery of our restaurant and dishes</li>
      </ul>
      </UnderDevelopment>
    </div>
  );
}
