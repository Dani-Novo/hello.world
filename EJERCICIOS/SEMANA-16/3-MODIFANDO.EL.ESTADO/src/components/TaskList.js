import React from "react";

function TaskList({ tasks, handleTaskToggle }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.done ? "line-through" : "none" }}
        >
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => handleTaskToggle(task.id)}
          />
          {task.task}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
