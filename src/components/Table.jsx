import React, { useState } from "react";

const Table = ({ expenses, income, expense }) => {
  return (
    <div className="w-full   p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Your Expense History
      </h2>

      {/* Table to display entries */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-0 border border-gray-300">ID</th>
            <th className="p-2 border border-gray-300">Type</th>
            <th className="p-2 border border-gray-300">Item Name</th>
            <th className="p-2 border border-gray-300">Category</th>
            <th className="p-2 border border-gray-300 ">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-0 border border-gray-300 text-center">
                {index + 1}
              </td>
              <td className="p-2 border border-gray-300 text-center">
                {entry.type == 1 ? "Cash In" : "Cash Out"}
              </td>
              <td className="p-2 border border-gray-300 text-center">
                {entry.item}
              </td>
              <td className="p-2 border border-gray-300 text-center">
                {entry.category}
              </td>
              <td
                className={`p-2 border border-gray-300 text-center tracking-wider ${
                  entry.type == 1 ? "text-green-700" : "text-red-700"
                }`}
              >
                {entry.amount - 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
