import styles from "./Tasks.module.css";
import { Task } from "../Task";

function Tasks({ tasks, onDelete, onModify, onClick }) {
  return (
    <div className={styles.tasksContainer}>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onClick={onClick}
            onModify={onModify}
          />
        );
      })}
    </div>
  );
}

export { Tasks };
