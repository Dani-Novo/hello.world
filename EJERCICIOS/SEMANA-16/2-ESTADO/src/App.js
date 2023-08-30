import React, { useState } from "react";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const initialTasks = [
    {
      id: 1,
      task: "Ir a la compra",
      done: false,
    },
    {
      id: 2,
      task: "Hacer ejercicios de react",
      done: true,
    },
  ];

  const [tasks] = useState(initialTasks);

  return (
    <div className="App">
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
