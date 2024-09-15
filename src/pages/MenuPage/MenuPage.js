import UnderDevelopment from '../../components/UnderDevelopment/UnderDevelopment';
import { useState, useEffect } from 'react';

export default function MenuPage() {
  // Fetch data example
  // const [isMenuLoading, setIsMenuLoading] = useState(false);
  // const [menu, setMenu] = useState([]);
  // const [isMenuError, setIsMenuError] = useState('');

  // useEffect(() => {
  //   const fetchMenu = async () => {
  //     try {
  //       setIsMenuLoading(true);
  //       const menuResponse = await fetch('https://www.menuurl.com/');
  //       const menuData = menuResponse.json();
  
  //       if(!menuResponse.ok) {
  //         //log logic
  //         throw Error('Failed to download menu');
  //       }

  //       setMenu(menuData);
  //       setIsMenuLoading(false);
  //     } catch (error) {
  //       setIsMenuError(error);
  //       setIsMenuLoading(false);
  //     }
  //   }

  //   fetchMenu();
  // }, [])

  return (
    <div className="container">
      <UnderDevelopment title="Little Lemon Menu">
        <p><strong>Note:</strong> This Menu page is still being developed.</p>
        <p>Future features will include:</p>
        <ul>
          <li>Comprehensive list of appetizers, main courses, and desserts</li>
          <li>Detailed descriptions of each dish</li>
          <li>Pricing information</li>
          <li>Dietary information (vegetarian, vegan, gluten-free options)</li>
          <li>Seasonal specials and chef's recommendations</li>
          <li>High-quality images of signature dishes</li>
        </ul>
      </UnderDevelopment>
    </div>
  );
}