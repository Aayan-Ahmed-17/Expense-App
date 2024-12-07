import React, { useState } from 'react';

const DynamicTable = () => {
  // State to store the list of entries
  const [entries, setEntries] = useState([]);
  
  // State for form inputs
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Create a new entry object
//     const newEntry = {
//       id: entries.length + 1,
//       name,
//       age,
//       email
//     };

//     // Add new entry to the list
//     setEntries([...entries, newEntry]);

//     // Clear form inputs
//     setName('');
//     setAge('');
//     setEmail('');
//   };

  return (
    <div className="max-w-4xl m-7 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Expenses</h2>
      
      {/* Form for entering new data */}
      {/* <form className="mb-4 grid grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button 
          type="submit" 
          className="col-span-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Add Entry
        </button>
      </form> */}

      {/* Table to display entries */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-0 border border-gray-300">ID</th>
            <th className="p-2 border border-gray-300">Type</th>
            <th className="p-2 border border-gray-300">Item Name</th>
            <th className="p-2 border border-gray-300">Category</th>
            <th className="p-2 border border-gray-300">Amount</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id} className="hover:bg-gray-50">
              <td className="py-2 px-0 border border-gray-300 text-center">{entry.id}</td>
              <td className="p-2 border border-gray-300 text-center">{entry.name}</td>
              <td className="p-2 border border-gray-300 text-center">{entry.age}</td>
              <td className="p-2 border border-gray-300 text-center">{entry.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;