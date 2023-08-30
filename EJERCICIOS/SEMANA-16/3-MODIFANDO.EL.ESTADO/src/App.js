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

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const newTaskObj = {
      id: tasks.length + 1,
      task: newTask,
      done: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const handleTaskToggle = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskList tasks={tasks} handleTaskToggle={handleTaskToggle} />
      <div className="NewTask">
        <input
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
          maxLength={100}
          placeholder="Añade una nueva tarea"
        />
        <button onClick={handleAddTask}>Añadir Tarea</button>
      </div>
    </div>
  );
}

export default App;
