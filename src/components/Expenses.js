import ExpenseItem from "./ExpenseItem";

 function Expenses(props) {
return (
    <div className="expenses">
      <ExpenseItem title={props.items[0].title} amount={props.item[0].amount} date={props.item[0].date}></ExpenseItem>
      <ExpenseItem title={props.items[1].title} amount={props.item[1].amount} date={props.item[1].date}></ExpenseItem>
      <ExpenseItem title={props.items[2].title} amount={props.item[2].amount} date={props.item[2].date}></ExpenseItem>
      <ExpenseItem title={props.items[3].title} amount={props.item[3].amount} date={props.item[3].date}></ExpenseItem>
      
    </div>
)
 }
 export default Expenses;