
import './ExpenseItem.css';

function ExpenseItem(props) {

  // const expenseDate = props.date;
  // const expenseTitle = props.title;
  // const expenseAmount = props.amount;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2> {props.title}  </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
