import { useEffect, useState } from "react";
import styles from "../css/Search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "3b5433e25bde4f5b9e0fdd3579d1a635"; // Should be placed in env variables when deploying app

export default function Search({ setData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFoodApi() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      setData(data.results);
    }
    fetchFoodApi();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
