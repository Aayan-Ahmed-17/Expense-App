// import React from 'react'

const ExpenseAmount = ({ value, onChange, placeholder , register }) => (
    <input
      type="number"
      placeholder="Enter Value"
      className="input input-bordered w-full max-w-xs px-2"
      {...register("amount")}
    />
  );

export default ExpenseAmount