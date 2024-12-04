import React, { useState } from 'react';
import ExpenseInput from './ExpenseInput';

function ExpenseForm(initialValue = '', mode = 'add') {
    // const [input, setInput] = useState(initialValue);
    // const [error, setError] = useState('');
  
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
        <form className='max-w-[40rem] min-h-72 grid mx-auto border-2 border-slate-500 rounded-xl mt-8 pt-2'>
            <h2 className='mx-auto'>
              {/* {mode === 'add' ? 'New Todo' : 'Edit Todo'} */}
              Enter Informations
            </h2>
          <div className="grid grid-cols-3 max-h-24">
            {/* <ExpenseInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Task Here"
              defaultValue={initialValue}
            /> */}
            <input
              placeholder={"enter val"}
              // className="input input-bordered w-4/5 max-h-8 mx-auto"
              maxLength={50}
            />
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
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#6C63FF] text-[#F7F7F7] rounded-sm py-1 px-4 text-md w-1/4 text-center"
            >
              {/* {mode === 'add' ? 'Add' : 'Save'} */}
              save
            </button>
          </div>
        </form>
    ) ;
}

export default ExpenseForm;