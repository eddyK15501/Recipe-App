import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('kimchi');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    );


    const data = await response.json();

    setRecipes(data.hits);
    console.log(data);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="search-form" action="#">
        <input value={search} onChange={handleSearch} className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
