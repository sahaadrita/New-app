import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
   const [title, SetTitle] = useState(props.title);
    
   const ClickHandler = () => {
      SetTitle('Updated!');
       console.log(title);
   };
    return (
        <div className="expense-item"> 
           <ExpenseDate date={props.date}/>
           <div className="expense-item__description">
            <h2>
                {title}
            </h2>
            <div className="expense-item__price">${props.amount}</div>
           </div>
           <button onClick={ClickHandler}>Change Title</button>
        </div>
  
    );
}
export default ExpenseItem;