import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import Table from "./components/Table";
// import Sidebar from './components/Sidebar'

const Home = () => {
  const [mode, setMode] = useState(""); // ['add', 'view']  
  const [error, setError] = useState(null);

  const handleCancel = () => {
    setMode("view");
    setError(null);
  };

  return (
    <div className="min-h-screen bg-green-100 relative">
      <Navbar />
      {mode == "add" ? (
        <ExpenseForm mode={mode} onCancel={handleCancel} />
      ) : (
        <div className="w-3/4 grid pr-16">
          <Table
          // todos={todos}
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
