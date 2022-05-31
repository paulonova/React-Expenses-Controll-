import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  //Default content
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no Expenses.</h2>;
  }

  //Filtered Content
  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} //when use iteraction use always key..
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
