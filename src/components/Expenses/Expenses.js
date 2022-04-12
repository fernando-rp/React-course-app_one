import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import { useState } from "react";

const Expenses= (props)=> {

    const [filteredYear,setFilteredYear]=useState('2020');

    const expensesYearFilter=(selectedYear)=>{
        setFilteredYear(selectedYear)
    }

    const filteredExpenses=props.data.filter((data)=>{
        return data.date.getFullYear().toString()===filteredYear;

    })

    let expenseContent= <p >No se ha encontrado resultados para este año</p>;

    if (filteredExpenses.length>0){
        expenseContent=filteredExpenses.map((expense)=>{
        return( <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
        />)})
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onYearFilter={expensesYearFilter} />
            {expenseContent}
        </Card>
    )


}

export default Expenses;