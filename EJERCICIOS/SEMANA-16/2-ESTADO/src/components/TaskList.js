import React from "react";

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.done ? "line-through" : "none" }}
        >
          {task.task}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
