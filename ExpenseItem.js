import React from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

  const ExpenseItem = (props) => {
   
    return (
     
      
      <Card className='expense-item'>

      <ExpenseDate Date ={props.Date} />
      
       <div className ='expense-item__description'>
        <h2>{props.title}</h2>
        
        <div className ='expense-item__price'>${props.Amount} 
       
        </div>
       </div>
      
      
      </Card>
     
    );
  }
 
  export default ExpenseItem