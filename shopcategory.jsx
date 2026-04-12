import React from 'react';
import shoes from '../component/Assests/image 6.jpg'
import womenimage from '../component/Assests/Women ethnic.webp';
import womenimage1 from '../component/Assests/Women western.jpg';
import womenimage2 from '../component/Assests/Men.jpg';
import image3 from '../component/Assests/Books.jpg';
import image4 from '../component/Assests/Bags.webp';
import image5 from '../component/Assests/Drink.jpg';
import image6 from '../component/Assests/Beauty.jpg';
import './shopcategory.css';
import { Link } from 'react-router-dom';

const CircleImage = () => {
  return (
    <div className="circle-wrapper">
    <div className="circle-container">
     <Link to="/Women-ethnic">
      <img
        src={womenimage} // Replace with your image URL
        alt="Women Ethnic"
        className="circle-image"
      /> </Link>
      <p className="image-label">Women Ethnic</p>
    </div>
    {/* Another image on the right */}
      <div className="circle-container">
        <Link to="/Women- western">
        <img src={womenimage1} alt="Another Ethnic" className="circle-image" />
        </Link>
        <p className="image-label">Women western</p>
      </div>
      {/* Another image on the right */}
      <div className="circle-container">
        <Link to="/men-clothing">
        <img src={womenimage2} alt="Another Ethnic" className="circle-image" />
        </Link>
        <p className="image-label">Men</p>
        
      </div>
      <div className="circle-container">
        <Link to="/Books-category">
        <img src={image3} alt="Another Ethnic" className="circle-image" />
        </Link>
        <p className="image-label">Books</p>
        
      </div>
      <div className="circle-container">
        <Link to="/Bags-category">
        <img src={image4} alt="Another Ethnic" className="circle-image" />
        </Link>
        <p className="image-label">bags</p>
        
      </div>
      <div className="circle-container">
        <Link to="/Drink and Food">
        <img src={image5} alt="Another Ethnic" className="circle-image" />
        </Link>
        <p className="image-label">Drink and Food</p>
        
      </div>
      <div className="circle-container">
        <Link to="/Beauty">
        <img src={image6} alt="Another Ethnic" className="circle-image" />
        </Link>
        <p className="image-label">Beauty</p>
        
      </div>
      <div className="circle-container">
        <Link to="/Shoes">
        <img src={shoes} alt="Another Ethnic" className="circle-image" />
        </Link>
        <p className="image-label">Shoes</p>
        
      </div>


    </div>
  );
};

export default CircleImage;