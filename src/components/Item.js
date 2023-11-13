// Item.js
import React, { useState } from "react";

const Item = ({ name, category }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
};

export default Item;
