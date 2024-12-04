import React, { useState } from 'react';
import ExpenseInput from './ExpenseItem';
import ExpenseType from './ExpenseType';
import ExpenseCategory from './ExpenseCategory';
import { useForm } from 'react-hook-form';
import ExpenseItem from './ExpenseItem';
import ExpenseAmount from './ExpenseAmount';

function ExpenseForm(initialValue = '', mode = 'add') {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error, setError] = useState('');
  
    const onSubmit = (data) => {
      console.log(data)
    }
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   if (!input.trim()) {
    //     setError('Task cannot be empty');
    //     return;
    //   }
      
    //   await onSubmit(input);
    //   setInput('');
    //   setError('');
    // };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[29rem] grid grid-rows-6 min-h-64 mx-auto border-2 border-slate-500 rounded-xl mt-8 pt-2'>
            
            <h2 className='mx-auto text-xl row-span-1'>
              {/* {mode === 'add' ? 'New Todo' : 'Edit Todo'} */}
              Enter Informations
            </h2>
          <div className="grid grid-cols-2 gap-3 px-4 row-span-4 mt-2 mb-12">
            {/* <ExpenseInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Task Here"
              defaultValue={initialValue}
            /> */}
            <ExpenseType register={register}/>
            <ExpenseCategory register={register}/>
            <ExpenseItem register={register}/>
            <ExpenseAmount register={register}/>
            {/* <input
              placeholder={"enter val"}
              className="input input-bordered max-h-11 text-lg rounded px-2"
              maxLength={50}
              />
            <input
              placeholder={"enter val"}
              className="input input-bordered max-h-11 text-lg rounded px-2"
              maxLength={50}
            />
            <input
            placeholder={"enter val"}
            className="input input-bordered max-h-11 text-lg rounded px-2"
            maxLength={50}
            />
            <input
              placeholder={"enter val"}
              className="input input-bordered max-h-11 text-lg rounded px-2"
              maxLength={50}
              /> */}
            {/* {error && (
              alert(error)
              )} */}
          </div>
          <div className="w-4/5 self-end flex justify-between mx-auto mb-2">
            <button
              type="button"
            //   onClick={onCancel}
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
    ) ;
}

export default ExpenseForm;