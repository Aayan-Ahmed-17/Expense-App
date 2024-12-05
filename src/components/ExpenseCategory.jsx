import { useEffect, useState } from "react";
import { cashInCategories, cashOutCategories } from "../utilis/mockData";

function ExpenseCategory({register , selectedType}) {
    const [initialType, setInitialType] = useState(true)
    console.log(selectedType)

    // useEffect(()=>{
    //     setInitialType(prev => !prev)
    //     console.log(initialType, selectedType)
    // }, [selectedType])
    
    return (
            <select className="select w-full max-w-xs px-1" name="category" {...register("category")}>
                <option disabled>Select Category</option>
                {/* {initialType == true ? cashInCategories.map((e,i) =>{
                    return(
                        <option value={e} key={i}>{e}</option>
                    )
                }) : cashOutCategories.map((e,i) =>{
                    return(
                        <option value={e} key={i}>{e}</option>
                    )
                })
                } */}

            </select>
    );
}

export default ExpenseCategory;
