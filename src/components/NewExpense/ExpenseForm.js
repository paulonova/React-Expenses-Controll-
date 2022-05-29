import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Function to change state on input
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //event.target.reset();
    //Clean the input fields
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            type='text'
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type='number'
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type='date'
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__submit'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
