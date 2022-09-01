import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import { useState } from "react";
import styles from "./App.module.css";
import "./global.css";

function App() {
  const [show, setShow] = useState(false);
  const [change, setChange] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className={styles.container}>
      <h1>TODO LIST</h1>
      <Button onClick={() => setShow(true)} />
      {show ? (
        <Modal
          onClose={() => setShow(false)}
          onChange={(value) => setChange(value)}
          onAddTask={() => setTasks([...tasks, change])}
        />
      ) : null}
      <ul>
        {tasks.map((task) => {
          return <li> {task}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
