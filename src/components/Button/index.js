import styles from "./Button.module.css";

function Button({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      ADD A LIST
    </button>
  );
}

export { Button };
