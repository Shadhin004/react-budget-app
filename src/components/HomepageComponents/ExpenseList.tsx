import { ListGroup, Button } from "react-bootstrap"
import { ExpenseType } from "../../types/Expense"

interface Props {
    expenseList: ExpenseType[];
    setExpenseList : React.Dispatch<ExpenseType[]>
}


const ExpenseList = ({ expenseList, setExpenseList }: Props) => {
    const handleDelete = (id : string) => {
        let filteredList = expenseList.filter((exp) => exp.id !== id)
        setExpenseList(filteredList)
    }
    const listItems = expenseList.length !== 0 && expenseList.map((item: ExpenseType, index: number) => <ListGroup.Item as="li" key={index}>{item.source} : {item.amount}EUR on {item.expense_date.toString()}  <Button onClick={()=> handleDelete(item.id)} style={{ float: 'right' }} variant="outlined-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
    </svg></Button></ListGroup.Item>)
    return (
        <div>
            <center><h5>{expenseList.length !== 0 ? 'Expense history' : ''}</h5></center>
            <ListGroup as="ol" numbered>
                {listItems}
            </ListGroup>
        </div>
    )
}

export default ExpenseList