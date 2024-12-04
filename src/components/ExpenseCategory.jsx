function ExpenseCategory() {
    return (
            <select className="select w-full max-w-xs px-1">
                <option disabled selected>Select Category</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
            </select>
    );
}

export default ExpenseCategory;