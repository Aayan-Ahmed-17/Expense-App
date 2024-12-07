import React from 'react'

const ExpenseAmount = ({ value, onChange, placeholder , register }) => (
    <input
      type="number"
      placeholder="Enter Amount"
      className="input input-bordered w-full max-w-xs px-2"
      {...register("amount", {required: true})}
    />
  );

export default ExpenseAmount