import "./Expenseitem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function expenses(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <p className='expense-item__price'>${props.amount}</p>
      </div>
    </Card>
  );
}

export default expenses;
