import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Order from './Pages/Order/Order'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'
import {Routes,Route} from 'react-router-dom'
function App() {
 

  return (
    <>
      <Navbar />
      <hr/>
      <div className='app'>
      <SideBar />
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
      </div>
      
    </>
  )
}

export default App
