import React from "react";
import { categories } from "../App";
interface Props {
  onSelectedCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectedCategory }: Props) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => onSelectedCategory(event.target.value)}
      >
        <option value="">All Category</option>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
