import React from "react";
import style from "./Recipe.module.css";

const Recipe = (props) => {

  return (
    <div className={style.recipe}>
      <h1>{props.recipe.recipe.label}</h1>
      <ol>
        {props.recipe.recipe.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient.text}</li>;
        })}
      </ol>
      <p>Calories: {Math.round(props.recipe.recipe.calories)}</p>
      <img src={props.recipe.recipe.image} alt="recipe-image" />
    </div>
  );
};

export default Recipe;
