import React from "react";
import categories from "./data/category";
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
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
