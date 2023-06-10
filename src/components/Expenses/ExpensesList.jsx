import React from "react";

import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList = (props) =>  {

    // let expensesContent = <p>No Expense Found.</p>;

    if(props.items.length === 0)
    {
        return <h2 className="expenses-list__fallback">Found NO expenses ...</h2>
    }

    return <ul className="expenses-list" >
        {props.items.map( (expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ) ) 
        }
    </ul>


}

export default ExpensesList;