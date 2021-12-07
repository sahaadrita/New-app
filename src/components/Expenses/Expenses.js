import ExpenseItem from "./ExpenseItem";

import './Expenses.css'
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear]=useState('2020')
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear)
  }
return (
    <div className= "expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    {/* //   <div style = {{borderRadius:"12px" ,boxShadow:"0 1px 8px black"}}> */}
      <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
      
    </div>
)
 }
 export default Expenses;