import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import Table from "./components/Table";
import { useForm } from "react-hook-form";
// import Sidebar from './components/Sidebar'

const Home = () => {
  const [expenses, setExpenses] = useState([]); //All todo Array
  const [mode, setMode] = useState("add"); // ['add', 'view']
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTodo = {
      ...data,
    };

    setExpenses((prev) => [...prev, newTodo]);
    setMode("view");
  };
  
  const handleCancel = () => {
  setMode("view");
  setError(null);
};

return (
  <div className="min-h-screen bg-green-100 relative">
    <Navbar />
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
        <Table
        expenses={expenses}
        // onEdit={handleEdit}
        // onDelete={handleDeleteTodo}
        />
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
