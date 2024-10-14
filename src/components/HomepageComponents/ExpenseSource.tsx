import { useState } from "react"
import { Button } from "react-bootstrap"
import { ExpenseType } from "../../types/Expense";
import { useForm } from "react-hook-form";

interface Props {
    expenseList: ExpenseType[],
    setExpenseList: React.Dispatch<ExpenseType[]>
}

const ExpenseSource = ({ expenseList, setExpenseList }: Props) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ExpenseType>()
    const onSubmit = (data: ExpenseType) => {
        setExpenseList([...expenseList, { ...data, id: Date.now().toString() }])
        reset()
    }
    return (
        <div>
            <center><h5>Expense</h5></center>
            <form className='form-control p-3' id='expense-form' onSubmit={handleSubmit(onSubmit)}>
                <label className='mt-2'>Sector</label>
                <input className="form-control" type="text" {...register('source', {
                    required: {
                        value: true,
                        message: "Source is required"
                    }
                })} placeholder="Source" />
                {errors.source && <span style={{ color: 'red' }}>{errors.source.message}</span>}

                <label className='mt-2'>Amount of expense</label>
                <input className="form-control" type="number" {...register('amount', {
                    required: {
                        value: true,
                        message: "Amount is required"
                    }
                })} />
                {errors.amount && <span style={{ color: 'red' }}>{errors.amount.message}</span>}

                <label className='mt-2'>Date of expense</label>
                <input className="form-control" type="date" {...register('expense_date', {
                    required: {
                        value: true,
                        message: "Date is required"
                    }
                })} placeholder="" />
                {errors.expense_date && <span style={{ color: 'red' }}>{errors.expense_date.message}</span>}

                <Button variant="outline-dark" className='mt-2' size='sm' type="submit">Add expense</Button>
            </form>
        </div>
    )
}

export default ExpenseSource