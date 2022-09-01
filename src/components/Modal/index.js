import { XIcon } from "../XIcon";
import styles from "./Modal.module.css";

function Modal({ onClose, onChange, onAddTask }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.Modal}>
        <XIcon className={styles.xIcon} onClick={onClose} />
        <input
          type="text"
          className={styles.Input}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <div>
          <button className={styles.Button} onClick={onAddTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export { Modal };
