import React from "react";

function CategoryFilter({ categories, selected, onSelect }) {
  const buttons = categories.map((category) => {
    console.log(category)
    const name = category === selected ? "selected" : null
    return (
      <button key={category} className={name} onClick={() => onSelect(category)}>
        {category}
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
