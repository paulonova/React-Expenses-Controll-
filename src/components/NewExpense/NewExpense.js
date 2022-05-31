import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const openNewExprense = () => {
    setIsEditing(true);
  };

  const closeNewExprense = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  return (
    <div className='new-expense'>
      {!isEditing ? (
        <button onClick={openNewExprense}>Create New Expense</button>
      ) : (
        <ExpenseForm
          onCancel={closeNewExprense}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
