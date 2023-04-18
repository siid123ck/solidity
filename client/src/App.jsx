
import { BrowserRouter } from 'react-router-dom'
import Header from '../layout/header'
import Home from '../pages/home'
import Services from '../pages/services'
import Transactions from '../pages/transactions'
import './App.css'
import Footer from '../layout/Footer'

const App = () => 
     <BrowserRouter>
      <div className="min-h-screen">
       <div className="gradient-bg-welcome">
        <Header />
        <Home />
     </div>  
     <Services />  
     <Transactions />
     <Footer />
     </div>
    </BrowserRouter>
  


export default App
