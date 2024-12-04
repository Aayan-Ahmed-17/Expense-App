import { useEffect, useState } from "react";

function ExpenseType({register , watch}) {
    // let val = watch('type')
    // function changeType() {
    //     setType(watch('type'))
    // }
    // useEffect(()=>{
    //     console.log(watch('type'))
    //     console.log(type)
    // },[type])
    return (
            <select className="select w-full max-w-xs px-1" name="type" {...register("type")}>
                <option defaultValue disabled>Select Type</option>
                <option value={1}>Cash In</option>
                <option value={0}>Cash Out</option>
            </select>
    );
}

export default ExpenseType;