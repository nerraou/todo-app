import styles from "./Task.module.css";
import { useState } from "react";
import { DropDown } from "../DropDown";
import { DotsIcon } from "../DotsIcon";

function Task({ task, onDelete, onModify, onClick }) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <div className={styles.task}>
      {task.value}
      <DotsIcon className={styles.dotsIcon} onClick={toggleShow} />
      {show ? (
        <DropDown
          onDelete={() => {
            onDelete(task.id);
          }}
          onClick={onClick}
          onModify={onModify}
        />
      ) : null}
    </div>
  );
}

export { Task };
