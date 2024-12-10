import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import Table from "./components/Table";
import { useForm } from "react-hook-form";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// import Sidebar from './components/Sidebar'

const Home = () => {
  const [expenses, setExpenses] = useState([]); //All expenses
  const [mode, setMode] = useState("add"); // ['add', 'view']
  const [error, setError] = useState(null);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  //* Add Expense || Edit Expense Will created soon
  const onSubmit = (data) => {
    const newTodo = {
      ...data,
    };
    setExpenses((prev) => [...prev, newTodo]);
    setMode("view");
    data.type == 1
      ? setIncome((prev) => prev + +data.amount)
      : setExpense((prev) => prev + +data.amount);
    reset();
  };

  //* func On Cancel Btn
  const handleCancel = () => {
    reset();
    setMode("view");
    setError(null);
  };

  return (
    <div className="h-[40rem] bg-green-100 grid grid-rows-10 gap-3 grid-cols-12 mt-16 px-4 py-3">
      <Navbar />
      <Header
        income={income}
        expense={expense}
        tailwindClasses="col-span-12 row-span-2 "
      />

      {mode == "add" ? (
        <ExpenseForm
        mode={mode}
        onCancel={handleCancel}
        register={register}
        watch={watch}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        tailwindClasses="row-span-6 col-span-9 mt-16"
        />
      ) : (
        <>
          {/* <div className=" grid pr-16"> */}
          <div className="col-span-9 row-span-8 flex flex-col w-[95%]">
            <Table expenses={expenses} income={income} expense={expense} />
            <button
              onClick={() => setMode("add")}
              className="bg-[#6C63FF] text-[#F7F7F7] rounded-sm self-end mr-0 py-2 px-4 text-2xl box-content mt-4 max-w-6"
            >
              +
            </button>
          </div>

          {/* </div> */}
        </>
      )}
      <Sidebar expense={expense} expenses={expenses} tailwindClasses="col-span-3 row-span-8" />
    </div>
  );
};

export default Home;
