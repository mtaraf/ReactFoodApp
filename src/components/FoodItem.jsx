import styles from "../css/foodItem.module.css";

export default function FoodItem({ foodItem, setFoodId }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={foodItem.image} alt="" />
      <div className={styles.content}>
        <p className={styles.name}>{foodItem.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(foodItem.id);
          }}
          className={styles.button}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
