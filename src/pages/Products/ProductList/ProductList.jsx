import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import styles from "./ProductList.module.css";

const dummyProducts = [
  { id: 1, name: "Book", price: 10, image: "https://picsum.photos/id/24/200/200" },
  { id: 2, name: "Pen", price: 2, image: "https://picsum.photos/id/25/200/200" },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.productListContainer}>
      <h2>Products</h2>
      {dummyProducts.map((product) => (
        <div key={product.id} className={styles.productItem}>
          {product.name} - ${product.price}
          <img src={product.image} alt={product.name} width={200} height={200} />
          <button onClick={() => addToCart(product)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
