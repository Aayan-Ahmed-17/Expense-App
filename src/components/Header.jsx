import React from "react";

const Header = () => {
  return (
    <>
      <div className="h-32 bg-[#59618b] my-4 mx-7 rounded-lg flex justify-around px-10 py-3 text-3xl uppercase text-slate-100">
        <div className="">
          <h2 className="-ml-3">Income</h2>
          <p className=" text-xl mt-2">$1000000</p>
        </div>
        <div>
          <h2 className="-ml-3">Expensed</h2>
          <p className=" text-xl mt-2">$10000</p>
        </div>
        <div>
          <h2 className="-ml-3">Balance</h2>
          <p className=" text-xl mt-2">$0</p>
        </div>
      </div>
    </>
  );
};

export default Header;
