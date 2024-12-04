function ExpenseType({register}) {
    return (
            <select className="select w-full max-w-xs px-1" name="type" {...register("Type")} required>
                <option defaultValue disabled>Select Type</option>
                <option>Cash In</option>
                <option>Cash Out</option>
            </select>
    );
}

export default ExpenseType;