import styles from "./DropDown.module.css";

function DropDown({ onDelete, onClick, onModify }) {
  return (
    <div className={styles.dropDown}>
      <div
        className={styles.dropDownItem}
        onClick={onClick}
        onModify={onModify}
      >
        Modify
      </div>
      <div className={styles.dropDownItem} onClick={onDelete}>
        Delete
      </div>
    </div>
  );
}

export { DropDown };
