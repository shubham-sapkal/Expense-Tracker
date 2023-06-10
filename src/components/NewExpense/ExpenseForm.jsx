import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [FormTitle, setTitle] = useState('');
    const [FormAmount, setAmount] = useState('');
    const [FormDate, setDate] = useState('');


    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: '',
    // });


    const titleChangeHandler = (event) => {

        setTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // });

        // setUserInput( (prevState) => {
        //     return {...prevState, title: event.target.value};
        // } );

        // console.log("Title: " + FormTitle);
    };

    
    const amountChangeHandler = (event) => {

        setAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // });

        // setUserInput( (prevState) => {
        //     return {...prevState, amount: event.target.value};
        // } );

        // console.log('Amount: ' + FormAmount);
    }

    
    const dateChangeHandler = (event) => {

        setDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // });

        // setUserInput( (prevState) => {
        //     return {...prevState, date: event.target.value};
        // });

        // console.log('date: ' + FormDate);
    }

    const submitHandler = (event) => {
        // didnt let form to reload the page
        event.preventDefault();

        const expenseData = { 
            title: FormTitle, 
            amount: FormAmount,
            date: new Date(FormDate)  
        };

        // console.log(expenseData);

        props.onSaveExpenseData(expenseData);

        // Clear the input
        setTitle('');
        setAmount('');
        setDate('');

    };


  return (
    
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" value={FormTitle} onChange={titleChangeHandler}  />
            </div>

            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" value={FormAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" value={FormDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>


        </div>

        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit" >Add Expense</button>
        </div>

    </form>

  );
}

export default ExpenseForm;