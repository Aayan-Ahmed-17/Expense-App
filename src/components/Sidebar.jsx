import React from "react";
import Chart from "./Chart";

const Sidebar = ({ expenses }) => {
  return (
    <div className="w-72 h-[91.5%] overflow-hidden bg-red-200 absolute right-0">
      <Chart expenses={expenses} />
      <ul className="bg-green-600 min-h-14 w-10 -mt-32">
        {expenses.length > 0 &&
          expenses.map((e, i) => {
            console.log(e);
            return <li>{e.category}</li>;
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
