import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense= (props)=>{

    const [addNewExpense,setAddNewExpense]=useState(false)

    const saveExpenseDataHandler=(enteredExpensedata)=>{

        const expenseData={
            ...enteredExpensedata,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setAddNewExpense(false)

    }

    const addExpense= () => {
        setAddNewExpense(true)
    }
    const cancelExpense=()=>{
        setAddNewExpense(false)
    }

    return(
        <div className="new-expense">
            {!addNewExpense && <button onClick={addExpense}> Add new expense </button>}
            {addNewExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelAdd={cancelExpense}/>}
        </div>
    )

}

export default NewExpense;