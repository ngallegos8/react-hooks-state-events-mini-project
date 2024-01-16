import React from "react";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

function TaskList({ tasks, onTaskFormSubmit, onDelete }) {
  const taskList = tasks.map((task) => (
    <Task key={task.text} text={task.text} category={task.category} onDelete={onDelete}/>
  ));

  return (
    <div className="tasks">
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />
      {taskList}
    </div>
  );
}

export default TaskList;
