import React from 'react';
import "./Expenses.css";

import ExpenseItem from './ExpenseItem';
const Expenses = (props) => {
    return (<div className = "expenses">
        {
            props.expenses.map(expense => (
                <ExpenseItem key = {expense.id} title = {expense.title} date = {expense.date} amount = {expense.amount} />
            ))
        }
    </div>);
}

export default Expenses;