import React from "react";
import { categories } from "../App";
const ExpenseForm = () => {
  return (
    <>
      <form action="">
        <div className="mb-3">
          <label htmlFor="description" className="form-lable">
            Description
          </label>
          <input id="description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select id="category" className="form-select">
            <option value="">All Category</option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
