import './App.css';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import Layout from './components/Layout';

function App() {
  return (
    <div className='app'>

    <GlobalProvider>
      <Layout>

      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        
      </div>
      </Layout>


    </GlobalProvider>
    </div>
  );
}

export default App;
