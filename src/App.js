import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import { useState } from "react";
import styles from "./App.module.css";
import "./global.css";
import { Tasks } from "./components/Tasks";

function App() {
  const [show, setShow] = useState(false);
  const [change, setChange] = useState("");
  const [tasks, setTasks] = useState([]);

  function modify(newValue) {
    const newTasks = tasks.map((task) => {
      if (task.id === newValue.id) {
        return { ...task, value: newValue.value };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function checkModify() {
    return (
      <div>
        {show ? (
          <Modal
            onClose={() => setShow(false)}
            onChange={(value) => setChange(value)}
            onAddTask={() => {
              const newTask = {
                id: Date.now(),
                value: change,
              };
              modify(newTask);
            }}
          />
        ) : null}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>TODO LIST</h1>
      <Button onClick={() => setShow(true)} />
      {show ? (
        <Modal
          onClose={() => setShow(false)}
          onChange={(value) => setChange(value)}
          onAddTask={() => {
            const newTask = {
              id: Date.now(),
              value: change,
            };
            setTasks([...tasks, newTask]);
          }}
        />
      ) : null}
      <Tasks
        tasks={tasks}
        onDelete={(id) =>
          setTasks((tasks) => tasks.filter((task) => task.id !== id))
        }
        onClick={() => setShow(true)}
        onModify={checkModify}
      />
    </div>
  );
}

export default App;
