import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>No items in cart.</p>}

      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price} x {item.quantity}
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      {cartItems.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

export default Cart;
