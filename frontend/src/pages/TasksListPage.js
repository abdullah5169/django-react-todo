import React, { useState } from "react";
import { useEffect } from "react";
import Add from "../components/Add";
import TaskItem from "../components/TaskItem";

const TaskListPage = () => {
  let [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);

  let getTasks = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/tasks");
    let data = await response.json();
    setTasks(data);
  };

  return (
    <div>
      <div className="tasks-list">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </div>
      <Add />
    </div>
  );
};

export default TaskListPage;
