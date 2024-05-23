import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import StoreProvider from './context/storeContext'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import SignPopUp from './components/SignPopUp/SignPopUp'
import Cart from './pages/Cart/Cart'
import Order from './pages/Order/Order'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [signPopUp,setSignPopUp] = useState(false)
  console.log(signPopUp);
  return (
    <div className='app'>
      <StoreProvider>
        <BrowserRouter>
        {signPopUp? <SignPopUp setSignPopUp={setSignPopUp}/>:<></>}
    <Navbar setSignPopUp={setSignPopUp} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<Order/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </StoreProvider>
    <ToastContainer/> 
    </div>
    
  )
}

export default App
