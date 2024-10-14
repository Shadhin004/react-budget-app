import { useEffect, useState } from "react"

import IncomeSource from "../components/HomepageComponents/IncomeSource"
import ExpenseSource from "../components/HomepageComponents/ExpenseSource"
import Target from "../components/HomepageComponents/Target"
import TransferAmount from "../components/HomepageComponents/TransferAmount"
import IncomeSourceList from "../components/HomepageComponents/IncomeSourceList"
import ExpenseList from "../components/HomepageComponents/ExpenseList"
import { IncomeType } from "../types/Income"
import { ExpenseType } from "../types/Expense"

export const BudgetApp = () => {
    const [incomeList, setIncomeList] = useState<IncomeType[]>(JSON.parse(localStorage.getItem('incomeList') || "[]"))
    const [expenseList, setExpenseList] = useState<ExpenseType[]>(JSON.parse(localStorage.getItem('expenseList') || "[]"))
    const [currentBalance, setCurrentBalance] = useState(0)
    const [savingsTarget, setSavingsTarget] = useState(Number(JSON.parse(localStorage.getItem('savingsTarget') || '0')))
    const [currentSaving, setCurrentSaving] = useState(Number(JSON.parse(localStorage.getItem('currentSaving') || '0')))
    const [transferAmount, setTransferAmount] = useState(0)

    useEffect(()=>{
        let totalIncome = 0;
        let totalExpense = 0;

        totalIncome = incomeList.reduce((prevValue, currenValue) => prevValue + Number(currenValue.amount), 0);
        totalExpense = expenseList.reduce((prevValue, currenValue) => prevValue + Number(currenValue.amount), 0);

        let totalBalance = totalIncome - (totalExpense + currentSaving);

        setCurrentBalance(totalBalance);

    },[incomeList, expenseList, currentSaving])

    useEffect(()=>{
        localStorage.setItem('incomeList', JSON.stringify(incomeList))
        localStorage.setItem('expenseList', JSON.stringify(expenseList))
        localStorage.setItem('savingsTarget', JSON.stringify(savingsTarget))
        localStorage.setItem('currentSaving', JSON.stringify(currentSaving))
    },[incomeList, expenseList, savingsTarget, currentSaving])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <IncomeSource incomeList={incomeList} setIncomeList={setIncomeList} />
                    <IncomeSourceList incomeList={incomeList} setIncomeList={setIncomeList} />
                </div>
                <div className="col">
                    <ExpenseSource expenseList={expenseList} setExpenseList={setExpenseList} />
                    <ExpenseList expenseList={expenseList} setExpenseList={setExpenseList} />
                </div>
                <div className="col">
                    <Target savingsTarget={savingsTarget} setSavingsTarget={setSavingsTarget} currentSaving={currentSaving}/>
                </div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col mt-5">
                    <center>
                        Current balance : {currentBalance}
                        <TransferAmount transferAmount={transferAmount} setTransferAmount={setTransferAmount} setCurrentSaving={setCurrentSaving} />
                    </center>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
