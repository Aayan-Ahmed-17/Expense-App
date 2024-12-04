function ExpenseType() {
    return (
            <select className="select w-full max-w-xs px-1">
                <option disabled selected>Select Type</option>
                <option>Cash In</option>
                <option>Cash Out</option>
            </select>
    );
}

export default ExpenseType;