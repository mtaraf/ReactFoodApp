import { useEffect, useState } from "react";
import styles from "../css/foodDetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "3b5433e25bde4f5b9e0fdd3579d1a635"; // Should be placed in env variables when deploying app

  useEffect(() => {
    async function fetchFoodDetailsApi() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFoodDetailsApi();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.name}>{food.title}</h1>
        <img className={styles.image} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>Preparation Time: {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Number of Servings: {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              ${(food.pricePerServing / 100).toFixed(2)} Per Serving
            </strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.instructions}>
          <ul>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
