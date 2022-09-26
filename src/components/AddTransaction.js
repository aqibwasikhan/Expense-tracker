import { useState, useContext } from "react"
import { GlobalContext } from '../context/GlobalState'




const AddTransaction = () => {
    
    const [text , setText] = useState('');
    const [amount , setAmount] = useState(0);
    const [date, setDate] = useState("");

    const { addTransaction } = useContext(GlobalContext) 
    
    const Sumbit = e => {
      e.preventDefault();

        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount,
          date: date
        }
        addTransaction(newTransaction)
        setText('');
        setAmount(0)
        
    }
    
  return (
    <>
       <h3>Add new transaction</h3>
      <form onSubmit={Sumbit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" required value={text}  onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income) </label >
          <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label><br />
          <input value={date} required onChange={(event) => setDate(event.target.value)} type="date" />
        </div>
        <button className="btn">Add transaction</button>
      </form>
 
    
    </>
    
  )
}

export default AddTransaction
