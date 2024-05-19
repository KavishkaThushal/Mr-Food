import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import StoreProvider from './context/storeContext'
import Footer from './components/Footer/Footer'
function App() {
 
  return (
    <div className='app'>
      <StoreProvider>
        <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </StoreProvider>
    </div>
    
  )
}

export default App
