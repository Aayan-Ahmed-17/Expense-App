import React from 'react'

const ExpenseItem = ({ value, onChange, placeholder , register }) => (
    <input
      type="text"
      placeholder="Enter Item Name"
      className="input input-bordered w-full max-w-xs px-2"
      // {...register("item", {required: true})}
    />
  );

export default ExpenseItem