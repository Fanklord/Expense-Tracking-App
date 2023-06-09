import { useState } from 'react'
import React from 'react';
import Expenses from './components/Expenses/Expenses.jsx';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense.jsx';
import './components/Expenses/Expenses.css'




const expenseItemsDummy=[
    {
        id:'e1',
        title:'Lambo Urus',
        amount:247000,
        date:new Date()

    },    {
        id:'e2',
        title:'Swimming Pool',
        amount:247000,
        date:new Date(2021,10,22)

    },    {
        id:'e3',
        title:'Electric Fence',
        amount:5000,
        date:new Date()

    },    {
        id:'e4',
        title:'Dinning Table',
        amount:7000,
        date:new Date()

    },    {
        id:'e5',
        title:'Lambo Urus',
        amount:255000,
        date:new Date(2020,10,25)

    }
    ,    {
        id:'e6',
        title:'Iphone 14 pro max',
        amount:2000,
        date:new Date(2020,10,25)

    },    {
        id:'e7',
        title:'Coding School',
        amount:5005000,
        date:new Date(2020,1,25)

    },    {
        id:'e8',
        title:'Home in Florida',
        amount:355000,
        date:new Date(2020,1,3)

    },    {
        id:'e9',
        title:'Gods Money',
        amount:100005000,
        date:new Date(2020,4,25)

    },    {
        id:'e10',
        title:'Island',
        amount:70005000,
        date:new Date(2019,10,25)

    },    {
        id:'e11',
        title:'Mums Honda',
        amount:90000,
        date:new Date(2019,10,25)

    },    {
        id:'e12',
        title:'Lambo Urus Blue',
        amount:505000,
        date:new Date(2023,10,25)

    }
]

const App = ()=> { 
 const[data,setData]=useState(expenseItemsDummy)

    const receivedDataFromNewExpense=(incomeExpenseData)=>{
//  console.log(dataa)
  setData((previousData)=>{
   const update= [
       ...previousData
    ]
    update.unshift(incomeExpenseData)

    return update;
})

    }

    const deleteExpenseHandler=(expenseId)=>{
        setData((previous)=>{
            const updated=previous.filter(expense=>expense.id!==expenseId)
            return updated;
        })
    }
           
    

    return(
        <>
    
        <div>
            
    <NewExpense onReceiveData={receivedDataFromNewExpense}/>
<Expenses expenses={data} deleteExpense={deleteExpenseHandler}/>
</div>
</>
    )

}




export default App;



