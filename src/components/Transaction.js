import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

export const Transaction = ({ transaction }) => {
    // newDate = transaction.date.sort((a, b) => {
    //         return new Date(b.date) - new Date(a.date)
    //       })

    const { deleteTransaction } = useContext(GlobalContext) 

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}  <span>{transaction.date}</span> <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
        

    )
}
