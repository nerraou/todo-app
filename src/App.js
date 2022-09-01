import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Button
        onClick={() => {
          setShow(true);
        }}
      />
      {show ? <Modal /> : null}
    </div>
  );
}

export default App;
