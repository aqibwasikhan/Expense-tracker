import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    const { clearAll } = useContext(GlobalContext)
    // transactions = transactions.sort((a, b) => {
    //     return new Date(b.date) - new Date(a.date)
    //   })
    // console.log(context)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}/>))}
               
            </ul>
            <button onClick={() => clearAll(transactions)} className="clear_btn">Clear add transaction</button>
        </>

    )
}

export default TransactionList