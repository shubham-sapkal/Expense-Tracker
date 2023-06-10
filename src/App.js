
// Custom Components
// import ExpenseItem from "./components/ExpenseItem";

import React, {useState} from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 1799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

    const [expenses, setExpense] = useState(DUMMMY_EXPENSE);

      const addExpensehandler = expense => {
        // console.log('In App.js');
        console.log(expense);

        // setExpense([expense, ...expenses]);
        setExpense( prevExpenses => {
          return [expense, ...prevExpenses];
        } );
      }

    return (
        <div>
            <NewExpense onAddExpense={addExpensehandler} />
            <Expenses items={expenses} />
        </div>
    )
}

export default App;