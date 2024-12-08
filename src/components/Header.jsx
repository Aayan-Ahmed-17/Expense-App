import React from "react";

const Header = ({income, expense}) => {
  return (
    <>
      <div className="h-28 bg-[#59618b] my-4 mx-7 rounded-lg flex justify-around px-10  items-center text-3xl uppercase text-slate-100">
        <div >
          <h2 className="-ml-3">Income</h2>
          <p className=" text-2xl mt-1 text-green-400">${income}</p>
        </div>
        <div>
          <h2 className="-ml-3">Expensed</h2>
          <p className=" text-2xl mt-1 text-red-500">${expense}</p>
        </div>
        <div>
          <h2 className="-ml-3">Balance</h2>
          <p className={`text-2xl mt-1 ${income - expense >= 0 ? 'text-green-400' : 'text-red-500'}`}>${income - expense}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
