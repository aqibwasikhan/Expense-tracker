import { createContext , useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
    
    ]
}
export const GlobalContext = createContext(initialState)
//provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    function clearAll(transaction){
        dispatch({
            type: 'CLEAR_TRANSACTION',
            payload: transaction
        })
        // transactions = []
        
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            clearAll
            
        }}>
            {children}
        </GlobalContext.Provider>
    )
}