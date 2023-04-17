
import Header from '../layout/header'
import Home from '../pages/home'
import Services from '../pages/services'
import Transactions from '../pages/transactions'
import './App.css'

const App = () => 
     <div className="main-h-screen">
     <div className="gradient-bg-welcome">
        <Header />
        <Home />
     </div>
     <Services />
     <Transactions />
    </div>
  


export default App
