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
    // chkking
    return (
            <select className="select w-full max-w-xs px-1" name="type" {...register("type" , {required: true})} defaultValue=''>
                <option disabled value=''>Select Type</option>
                <option value={0}>Cash In</option>
                <option >Cash Out</option>
            </select>
    );
}

export default ExpenseType;
