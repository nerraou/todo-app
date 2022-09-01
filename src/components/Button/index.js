import styles from "./Button.module.css";

function Button({ onClick }) {
  return (
    <div className={styles.background}>
      <h1> TODO LIST</h1>
      <br />
      <button className={styles.button} onClick={onClick}>
        ADD A LIST
      </button>
    </div>
  );
}

export { Button };
