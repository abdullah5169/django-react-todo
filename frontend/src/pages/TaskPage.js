import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const TaskItem = () => {

  const navigate = useNavigate();

  const taskId = useParams().id;

  let CSRF = document.cookie.slice(10)

  let [task, setTask] = useState(null);

  useEffect(() => {
    getTask();
  }, [taskId]);

  let getTask = async () => {
    if (taskId === "new") return;
    let response = await fetch(`http://127.0.0.1:8000/api/tasks/${taskId}`);
    let data = await response.json();
    setTask(data);
  };

  let createTask = async () => {
    fetch(`http://127.0.0.1:8000/api/tasks/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": CSRF,
      },
      body: JSON.stringify(task),
    });
  };

  let updateTask = async () => {
    fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": CSRF,
      },
      body: JSON.stringify(task),
    });
  };

  let deleteTask = async () => {
    fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": CSRF,
      },
    });
    navigate("/");
  };

  let handleUpdate = () => {
    if (taskId !== "new" && task.body === "") {
      deleteTask();
    }
    else if (taskId !== "new") {
      updateTask();
    } 
    else if (taskId === "new" && task !== null) {
      createTask();
    }
    navigate("/");
  };

  return (
    <div>
      <Link to={"/"} className="button">
        <p onClick={handleUpdate}>Back</p>
      </Link>
      {taskId !== "new" ? (
        <Link to={"/"} className="button">
          <p onClick={deleteTask}>Delete</p>
        </Link>
      ) : (
        <Link to={"/"} className="button">
          <p onClick={handleUpdate}>Done</p>
        </Link>
      )}
      
      <textarea placeholder="Enter task" className="text-area"
        onChange={(e) => {
          setTask({ ...task, body: e.target.value });
        }}
        value={task?.body}
      ></textarea>
    </div>
  );
};

export default TaskItem;
