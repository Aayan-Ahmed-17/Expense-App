import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ExpenseType from "./ExpenseType";
import ExpenseCategory from "./ExpenseCategory";
import ExpenseItem from "./ExpenseItem";
import ExpenseAmount from "./ExpenseAmount";

function ExpenseForm({ initialValue = "", mode = "add", onCancel , watch , handleSubmit, onSubmit, register}) {
  // const [input, setInput] = useState(initialValue);
  const [error, setError] = useState("");

  const selectedType = watch("type");

  // const onSubmit = (data) => {
  //   console.log(data);
  //   // setShowForm(!showForm);
  // };

  return (
    <>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[29rem] grid grid-rows-6 min-h-64 mx-auto border-2 border-slate-500 rounded-xl mt-8 pt-2"
        >
          <h2 className="mx-auto text-xl row-span-1">
            {/* {mode === 'add' ? 'New Todo' : 'Edit Todo'} */}
            Enter Informations
          </h2>

          <div className="grid grid-cols-2 gap-3 px-4 row-span-4 mt-2 mb-12">
            <ExpenseType register={register} watch={watch} />
            <ExpenseCategory register={register} selectedType={selectedType} />
            <ExpenseItem register={register} />
            <ExpenseAmount register={register} />
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
              {/* {mode === 'add' ? 'Add' : 'Save'} */}
              ADD
            </button>
          </div>
        </form>
      
    </>
  );
}

export default ExpenseForm;
