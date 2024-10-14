import { InputGroup, Button } from "react-bootstrap"

interface Props {
    transferAmount: number,
    setTransferAmount : React.Dispatch<number>,
    setCurrentSaving : React.Dispatch<React.SetStateAction<number>>
}
const TransferAmount = ({ transferAmount, setTransferAmount, setCurrentSaving } : Props) => {

    const handleTransfer = () => {
        setCurrentSaving(prevSav => prevSav + transferAmount)
        setTransferAmount(0)
    }

    return (
        <div>
            <div className='form-control p-3'>
                <label className='mt-2'>Transfer to saving account</label>
                <InputGroup className="mb-3">
                    <input
                    type="number"
                        className="form-control"
                        placeholder="Amount"
                        aria-describedby="basic-addon2"
                        value={transferAmount}
                        onChange={(event) => setTransferAmount(Number(event.target.value))}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={() => handleTransfer()}>
                        Transfer
                    </Button>
                </InputGroup>
            </div>
        </div>
    )
}

export default TransferAmount