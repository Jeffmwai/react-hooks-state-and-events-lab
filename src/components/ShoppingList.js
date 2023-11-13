// ShoppingList.js
import React, { useState } from "react";

const ShoppingList = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span className="category">{item.category}</span>
            <button className="add">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
