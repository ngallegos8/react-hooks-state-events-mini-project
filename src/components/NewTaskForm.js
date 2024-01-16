import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  console.log(text)
  console.log(category)

  function handleTextChange(event) {
    setText(event.target.value);
  }
  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    const new_task = {
      text: text,
      category: category
    }
    onTaskFormSubmit(new_task)
    // onTaskFormSubmit({text, category})
    // onTaskFormSubmit({text: text, category: category})
    setText("")
    setCategory("All")
  }

  // const categoryOptions = categories.map((category) => ( 
  //   <option key={category}>{category}</option>
  // ));


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {categories.map((category) => ( 
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
