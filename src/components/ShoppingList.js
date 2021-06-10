import React from "react";
import Item from "./Item";
import { useState } from 'react'

function ShoppingList({ items }) {

const [selectedCategory, setSelectedCategory] = useState("All")

function daFilter(e) {
  setSelectedCategory(e.target.value)
}
const newArray = items.filter( el => {
  if (selectedCategory === "All") {return true}
  else {return el.category === selectedCategory}
})
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={daFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
