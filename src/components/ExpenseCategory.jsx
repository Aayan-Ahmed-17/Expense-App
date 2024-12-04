import { cashInCategories } from "../utilis/mockData";

function ExpenseCategory({register , selectedType}) {
    console.log(selectedType);
    
    return (
            <select className="select w-full max-w-xs px-1" name="category" {...register("category")}>
                <option defaultValue disabled>Select Category</option>
                {selectedType && cashInCategories.map((e,i) =>{
                    return(
                        <option value={e} key={i}>{e}</option>
                    )
                })}

            </select>
    );
}

export default ExpenseCategory;