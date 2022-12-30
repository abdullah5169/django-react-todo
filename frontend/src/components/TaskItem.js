import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ task }) => {
  return (
    <div className="taskItem">
      <Link to={`/task/${task.id}`}  className = 'item-link'>
        <h1>{task.body}</h1>
      </Link>
    </div>
  );
};

export default TaskItem;
