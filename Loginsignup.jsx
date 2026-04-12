import React, { useState } from 'react';
import './Loginsignup.css'; // Import the dedicated CSS

// Optional: You would normally use an icon library like 'react-icons'
// const UserIcon = () => <svg>...</svg>; 

const Loginsignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleModeSwitch = (mode) => {
    // 💡 Resetting inputs when switching modes improves UX
    setname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsLogin(mode === 'login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- Advanced Logic Placeholder ---
    
    if (isLogin) {
      console.log('Logging in with:', { email, password });
    
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log('Signing up with:', { name, email, password }); // Include name in signup data
    
    }

  

  };

  const formTitle = isLogin ? 'Log In to Quxma' : 'Create an Account';
  const mainButtonText = isLogin ? 'Continue to Login' : 'Register Now';
  const switchModeText = isLogin 
    ? "New to Quxma? Signup" 
    : "Already a member? Login";

  return (
    <div className="auth-container">
      <div className="auth-card">
        
        {/* Header Tab System */}
        <div className="auth-tabs">
          <button 
            className={`tab-button ${isLogin ? 'active' : ''}`}
            onClick={() => handleModeSwitch('login')} // Use the new handler
          >
            Login
          </button>
          <button 
            className={`tab-button ${!isLogin ? 'active' : ''}`}
            onClick={() => handleModeSwitch('signup')} // Use the new handler
          >
            Sign Up
          </button>
        </div>

        <h2 className="auth-title">{formTitle}</h2>

        <form className="auth-form" onSubmit={handleSubmit} method="POST">
          
          {/* Name Field - ONLY RENDERED IF NOT LOGIN (i.e., SIGNUP) */}
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text" // Changed type to 'text' for standard name input
                id="name"   // Changed id to 'name' for better accessibility/logic
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required={!isLogin} // Name is only required during signup
              />
            </div>
          )}
          
          {/* Email Field  */}
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Min 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
          </div>

          {/* Confirm Password Field */}
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={6}
                required={!isLogin} // Confirm Password is only required during signup
              />
            </div>
          )}
          
          {/* Main Action Button */}
          <button type="submit" className="auth-submit-btn">
            {mainButtonText}
          </button>

          {/* Forgot Password / Terms (Only for Login) */}
          {isLogin && (
            <div className="auth-options">
              <a href="#forgot" className="forgot-password">Forgot Password?</a>
            </div>
          )}
          
          {/* Mode Switcher */}
          <p className="switch-mode">
            <span className="switch-text">{switchModeText}</span>
            <span 
              className="switch-link" 
              onClick={() => handleModeSwitch(isLogin ? 'signup' : 'login')} // Use the new handler
            >
              &nbsp;here
            </span>
          </p>
        </form>
       
      </div>
    </div>

  );
};

export default Loginsignup;