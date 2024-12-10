import React from "react";
import Chart from "./Chart";

const Sidebar = ({ expenses, tailwindClasses }) => {
  return (
    <div className={`grid grid-rows-8 bg-red-200 rounded-lg pt-2 ${tailwindClasses}`}>
      <h2 className="text-xl font-bold row-span-1 text-center">
        You Expensed Total Amount Of <br />
        <span className="italic">2000$</span>
      </h2>
      <div className="grid row-span-7 grid-rows-7">
        <Chart expenses={expenses} tailwindClasses="row-span-4" />
        <ul className="bg-green-600 row-span-3 grid grid-cols-2 px-2 text-lg">
          {/* {expenses.length > 0 &&
          expenses.map((e, i) => {
            console.log(e);
            return <li>{e.category}</li>;
            })} */}
          <li className="text-white">
            <span className="-tracking-widest">=&gt;</span> kjdfldjas
          </li>
          <li className="text-white">
            <span className="-tracking-widest">=&gt;</span> kjdfldjas
          </li>
          <li className="text-white">
            <span className="-tracking-widest">=&gt;</span> kjdfldjas
          </li>
          <li className="text-white">
            <span className="-tracking-widest">=&gt;</span> kjdfldjas
          </li>
          <li className="text-white">
            <span className="-tracking-widest">=&gt;</span> kjdfldjas
          </li>
          <li className="text-white">
            <span className="-tracking-widest">=&gt;</span> kjdfldjas
          </li>
          <li className="text-white">
            <span className="-tracking-widest">=&gt;</span> kjdfldjas
          </li>
          <li className="text-white">
            <span className="-tracking-widest">=&gt;</span> kjdfldjas
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
