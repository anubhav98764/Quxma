import React from 'react';
import shoes1 from '../component/Assests/image 6.jpg';
import tv from '../component/Assests/tv.png';
import mobile from '../component/Assests/mobile.png';
import sneaker from '../component/Assests/sneakers.png';
import men from '../component/Assests/Men.jpg';
import women from '../component/Assests/Women-ethinic1.jpg';
import image from '../component/Assests/image1.jpg';  
import image1 from '../component/Assests/image2.jpg'; 
import { Link } from 'react-router-dom';
import './Shop.css';


const Shop = () => {
  return (
    <div className='wrapping'>
    <div className="circle-container1">
        <Link to="/Shoes">
        <img src={shoes1} alt="" className="circle-image1" />
        </Link>
        <p className="image-label1">Puma</p>
        </div>
         
         <div className='circle-container1'>
        <Link to="/Shoes">
        <img src={tv} alt="" className="circle-image1" />
        </Link>
        <p className="image-label1">Tv</p>
        </div>
        
        <div className="circle-container1">
        <Link to="/Shoes">
        <img src={sneaker} alt="" className="circle-image1" />
        </Link>
        <p className="image-label1">Sneakker</p>
    </div>
      
      <div className="circle-container1">
        <Link to="/Shoes">
        <img src={mobile} alt="" className="circle-image1" />
        </Link>
        <p className="image-label1">Mobile</p>
    </div>
    <div className="circle-container1">
        <Link to="/Shoes">
        <img src={men} alt="" className="circle-image1" />
        </Link>
        <p className="image-label1">men</p>
    </div>

    <div className="circle-container1">
        <Link to="/Shoes">
        <img src={women} alt="" className="circle-image1" />
        </Link>
        <p className="image-label1">Dress</p>
    </div>

    <div className="circle-container1">
        <Link to="/Shoes">
        <img src={image} alt="" className="circle-image1" />
        </Link>
        <p className="image-label1">Nike</p>
    </div>

    <div className="circle-container1">
        <Link to="/Shoes">
        <img src={image1} alt="" className="circle-image1" />
        </Link>
        <p className="image-label1">Nike</p>
    </div>

    </div>
  );
};

export default Shop;