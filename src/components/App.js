import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Set the initial category to "All"

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList items={itemData} selectedCategory={selectedCategory} />
      <Filter onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
