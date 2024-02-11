import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import categories from "./data/category";

const schema = z.object({
  description: z
    .string()
    .min(3, "description must be at least 3 Charactors")
    .max(50, "description less than 50 Charactors"),
  amount: z
    .number({ invalid_type_error: "Amount is Required" })
    .min(0.01, "Amount must be more than 0.01")
    .max(100_000, "Amount must be less than 100000"),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is Required" }),
  }),
});
type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div className="mb-3">
          <label htmlFor="description" className="form-lable">
            description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
        </div>
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
        </div>
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value="">All Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
