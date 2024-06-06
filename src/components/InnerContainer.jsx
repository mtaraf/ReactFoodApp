import styles from "../css/innerContainer.module.css";

export default function InnerCointer({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
