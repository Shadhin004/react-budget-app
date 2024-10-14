import { useEffect, useState } from "react"
import { Form, Button, ProgressBar } from "react-bootstrap"

interface Props {
    savingsTarget: number,
    setSavingsTarget : React.Dispatch<number>,
    currentSaving : number
}

const Target = ({savingsTarget, setSavingsTarget, currentSaving} : Props) => {

    const [progressNumber, setProgressNumber] = useState(0)
    useEffect(()=>{
        const calculateProgress =()=>{
            if(savingsTarget !== 0){
                let prgs = Math.ceil((currentSaving / savingsTarget) * 100);
                setProgressNumber(prgs)
            }else{
                setProgressNumber(0)
            }
        }

        calculateProgress()
    },[currentSaving, savingsTarget])

    return (
        <div>
            <center><h5>Target</h5></center>
            <div className='form-control p-3'>
                <label className='mt-2'>Set target</label>
                <Form.Control size="sm" type="number" value={savingsTarget} onChange={(event)=> setSavingsTarget(Number(event.target.value))} />
                <Button variant="outline-dark" className='mt-2' size='sm' onClick={()=> setSavingsTarget(0)}>Reset</Button>
                <p className="mt-3">Current saving : {currentSaving}</p>
                <p className="mt-3">Target : {savingsTarget}</p>
                <p className="mt-3">Progress: {progressNumber}% </p>
                <ProgressBar now={progressNumber} />
            </div>
        </div>
    )
}

export default Target