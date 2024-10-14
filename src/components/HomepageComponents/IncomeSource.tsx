import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { IncomeType } from '../../types/Income';
import { useForm } from 'react-hook-form';

interface Props {
    incomeList: IncomeType[],
    setIncomeList: React.Dispatch<IncomeType[]>
}

const IncomeSource = ({ incomeList, setIncomeList }: Props) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IncomeType>()
    const onSubmit = (data: IncomeType) => {
        setIncomeList([...incomeList, { ...data, id: Date.now().toString() }])
        reset()
    }
    return (
        <div>
            <center><h5>Income</h5></center>
            <Form className='form-control p-3' id='income-form' onSubmit={handleSubmit(onSubmit)}>
                <label className='mt-2'>Source</label>
                <input className='form-control form-control-sm' {...register('source', {
                    required: {
                        value: true,
                        message: "Source is required"
                    }
                })} type="text" placeholder="Salary" />
                {errors.source && <span style={{ color: 'red' }}>{errors.source.message}</span>}

                <label className='mt-2'>Amount of income</label>
                <input className='form-control form-control-sm' {...register('amount', {
                    required: {
                        value: true,
                        message: "Amount is required"
                    }
                })} type="number" />
                {errors.amount && <span style={{ color: 'red' }}>{errors.amount.message}</span>}

                <label className='mt-2'>Date of income</label>
                <input className='form-control form-control-sm' {...register('income_date', {
                    required: {
                        value: true,
                        message: "Date is required"
                    }
                })} type="date" />
                {errors.income_date && <span style={{ color: 'red' }}>{errors.income_date.message}</span>}

                <Button variant="outline-dark" className='mt-2' size='sm' type='submit'>Add income</Button>
            </Form>
        </div>
    )
}

export default IncomeSource