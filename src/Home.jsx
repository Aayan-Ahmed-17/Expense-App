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
    <div className="min-h-screen bg-green-100 relative">
      <Navbar />
      <Header income={income} expense={expense} />
      <Sidebar expenses={expenses}/>

      {mode == "add" ? (
        <ExpenseForm
          mode={mode}
          onCancel={handleCancel}
          register={register}
          watch={watch}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      ) : (
        <div className="w-3/4 grid pr-16">
          <Table expenses={expenses} income={income} expense={expense} />
          <button
            onClick={() => setMode("add")}
            className="bg-[#6C63FF] text-[#F7F7F7] rounded-sm justify-self-end py-2 px-4 text-2xl box-content mt-4 max-w-6"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
