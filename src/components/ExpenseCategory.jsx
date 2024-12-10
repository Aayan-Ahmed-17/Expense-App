import { useEffect, useState } from "react";
import { cashInCategories, cashOutCategories } from "../utilis/mockData";

function ExpenseCategory({register , selectedType, initialValue}) {
    const [selectedOption, setSelectedOption] = useState("");
    useEffect(() => {
        setSelectedOption('')
    }, [selectedType])

    // useEffect(()=>{
    //     setInitialType(prev => !prev)
    //     console.log(initialType, selectedType)
    // }, [selectedType])
    
    return (
            <select className="select w-full max-w-xs px-1" name="category" {...register("name", {required : true})} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option disabled value=''>Select Category</option>
                {selectedType == 1 ? cashInCategories.map((e, i) => {
                    return <option value={e} key={i}>{e}</option>
                }): selectedType == 2 ? cashOutCategories.map((e, i) => {
                    return <option value={e} key={i}>{e}</option>
                }) : null
            }

            </select>
    );
}

export default ExpenseCategory;
