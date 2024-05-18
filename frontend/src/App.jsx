import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
function App() {
 
  return (
    <div className='app'>
        <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App
