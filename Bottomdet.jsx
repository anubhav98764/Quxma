
import React from 'react';
import './Bottomdet.css';

const Footer = () => {
  const sections = [
    {
      title: "ABOUT",
      links: ["Contact Us", "About Us", ]
    },
    
    {
      title: "HELP",
      links: ["Payments", "Shipping", "Cancellation & Returns", "FAQ"]
    },
    {
      title: "CONSUMER POLICY",
      links: ["Cancellation & Returns", "Terms Of Use", "Security", "Privacy"]
    }
  ];

  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Navigation Links */}
        <div className="footer-links-grid">
          {sections.map((section) => (
            <div key={section.title} className="footer-col">
              <h1 className="footer-title">{section.title}</h1>
              <ul>
                {section.links.map(link => <li key={link}>{link}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Address Sections */}
        <div className="footer-address-grid">
          <div className="footer-col border-left">
            <h1 className="footer-title">Mail Us:</h1>
            <p>Quxma<br/>
               Singhanubhav00013@gmail.com</p>
            <div className="social-links">
              <span>Social:</span>
              <div className="social-icons">
                 <i className="fab fa-facebook-square"></i>
                 <i className="fab fa-twitter"></i>
                 <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
          
    
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-links">
          <span><i className="fas fa-briefcase"></i> Become a Seller</span>
          <span><i className="fas fa-star"></i> Advertise</span>
          <span><i className="fas fa-gift"></i> Gift Cards</span>
          <span><i className="fas fa-question-circle"></i> Help Center</span>
          
        </div>
        <div className="payment-methods">
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="Payments" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;