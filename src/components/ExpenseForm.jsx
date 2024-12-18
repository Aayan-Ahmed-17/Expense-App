import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ExpenseType from "./ExpenseType";
import ExpenseCategory from "./ExpenseCategory";
import ExpenseItem from "./ExpenseItem";
import ExpenseAmount from "./ExpenseAmount";

function ExpenseForm({
  initialValue = "",
  mode = "add",
  onCancel,
  watch,
  // reset,
  handleSubmit,
  onSubmit,
  register,
  tailwindClasses,
}) {
  const [error, setError] = useState("");

  //* To track the type help us in changing category
  const selectedType = watch("type");

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={` grid grid-rows-6 mx-auto border-2 border-slate-500 rounded-xl pt-2 ${tailwindClasses}`}
      >
        <h2 className="mx-auto text-xl row-span-1">Enter Informations</h2>

        <div className=" px-4 row-span-4 mt-2 mb-12">
          <div className="h-[80%] grid grid-cols-2 gap-3">
            <ExpenseType register={register} watch={watch} />
            <ExpenseCategory register={register} selectedType={selectedType} />
            <ExpenseItem register={register} />
            <ExpenseAmount register={register} />
          </div>
        </div>

        <div className="w-4/5 self-end flex justify-between mx-auto mb-2">
          <button
            type="button"
            onClick={onCancel}
            className="bg-[#F7F7F7] text-[#6C63FF] rounded-sm py-1 text-md border-[1px] border-[#6C63FF] w-1/4 text-center"
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="bg-[#6C63FF] text-[#F7F7F7] rounded-sm py-1 px-4 text-md w-1/4 text-center"
          >
            ADD
          </button>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
