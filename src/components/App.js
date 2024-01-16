import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  console.log(category)

  function handleDelete(deletedTask) {
    console.log(deletedTask)
    setTasks(tasks.filter((task) => task.text !== deletedTask))
  }

  const visibleTasks = tasks.filter((task) => 
    category === "All" || task.category === category
  )

  function handleAddTask(new_task) {
    setTasks([...tasks, new_task]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={category} onSelect={setCategory}/>
      <NewTaskForm onTaskFormSubmit={handleAddTask} categories={CATEGORIES}/>
      <TaskList tasks={visibleTasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
