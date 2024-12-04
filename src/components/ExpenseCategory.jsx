function ExpenseCategory({register}) {
    return (
            <select className="select w-full max-w-xs px-1" name="category" {...register("category")}>
                <option defaultValue disabled>Select Category</option>
                {/* <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option> */}

            </select>
    );
}

export default ExpenseCategory;