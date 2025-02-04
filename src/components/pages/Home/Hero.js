import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg'; // Corrected import path
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <header className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.
          </p>
          <Link 
            className="button-primary" 
            to={pages.bookings.path} 
            aria-label="Reserve a table at Little Lemon"
          >
            Reserve a Table
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={restaurantFoodImage} 
          alt="A delicious Mediterranean dish served at Little Lemon Restaurant" 
        />
      </div>
    </header>
  );
};

export default Hero;
