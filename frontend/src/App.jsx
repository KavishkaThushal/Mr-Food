import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import StoreProvider from './context/storeContext'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import SignPopUp from './components/SignPopUp/SignPopUp'
import Cart from './pages/Cart/Cart'
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
      </Routes>
      <Footer />
    </BrowserRouter>
    </StoreProvider>
    </div>
    
  )
}

export default App
