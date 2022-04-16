import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses= (props)=> {

    const [filteredYear,setFilteredYear]=useState('2020');

    const expensesYearFilter=(selectedYear)=>{
        setFilteredYear(selectedYear)
    }

    const filteredExpenses=props.data.filter((data)=>{
        return data.date.getFullYear().toString()===filteredYear;

    })

    return (
        <Card className="expenses">
            
            <ExpensesFilter selected={filteredYear} onYearFilter={expensesYearFilter} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;