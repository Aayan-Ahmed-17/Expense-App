import React from "react";
import Chart from "./Chart";

const Sidebar = ({ expenses , tailwindClasses}) => {
  return (
    <div className={` bg-red-200 rounded-lg  ${tailwindClasses}`}>
        <h2 className="row-span-1 ">You Expensed Total Amount Of 2000$</h2>
        <div className="grid grid-rows-7">

      <Chart expenses={expenses} tailwindClasses='row-span-4'/>
      <ul className="bg-green-600 row-span-3">
        {/* {expenses.length > 0 &&
          expenses.map((e, i) => {
            console.log(e);
            return <li>{e.category}</li>;
            })} */}
          <li>kjdfldjas</li>
          <li>kjdfldjas</li>
          <li>kjdfldjas</li>
          <li>kjdfldjas</li>
          <li>kjdfldjas</li>
          <li>kjdfldjas</li>
          <li>kjdfldjas</li>
          <li>kjdfldjas</li>
      </ul>
            </div>
    </div>
  );
};

export default Sidebar;
