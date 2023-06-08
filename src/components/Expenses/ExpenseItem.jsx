import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

const ExpenseItem = (props) => {
    // const expenseDate = props.date;
    // const expenseTitle = props.title;
    // const expenseAmount = props.amount;

    // let title = props.title;

    // const [title, setTitle] = useState(props.title);


    // const clickHandler = () => {
    //     // console.log("clicked!!");

    //     // title = 'updated!';
    //     setTitle("updated!!");

    // };


    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2> {props.title} </h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={ clickHandler } >Change Title</button> */}
      </Card>
    );
};

export default ExpenseItem;
