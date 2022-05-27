import "../css/expenseitem.css";

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <div>
        <div>{props.date.toLocaleString("en-GB", { month: "long" })}</div>
        <div>Year</div>
        <div>Day</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <p className='expense-item__price'>${props.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
