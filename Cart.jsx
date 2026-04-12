import React, { useState } from 'react'
import './Cart.css' // Import the dedicated CSS for Cart page 

const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  const [quantity, setQuantity] = useState(0)

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0) * quantity, 0)

  return (
    <div>
      <h1>Your Basket</h1>
      <p>Items: {cartItems.length}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: ${totalPrice.toFixed(2)}</p>
    </div>
  )
}

export default Cart