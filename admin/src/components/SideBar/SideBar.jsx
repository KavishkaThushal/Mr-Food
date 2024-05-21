import React, { useState } from 'react'
import './SideBar.css'
import { IoMdAddCircleOutline } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import { BsBox2 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
function SideBar() {
    const [active, setActive] = useState('')

  return (
    <div className='sidebar-container'>
      < div className='options'>
        
          <NavLink to='/add' onClick={()=>setActive('add')} className={`${active==='add'? 'sidebar-active':''} option`} >
            <IoMdAddCircleOutline/>
            <h3>Add Items</h3>
          </NavLink>

          <NavLink to='/list' onClick={()=>setActive('list')} className={`${active==='list'? 'sidebar-active':''} option`}>
            <GoChecklist/>
            <h3>List Items</h3>
          </NavLink>

          <NavLink to='/order' onClick={()=>setActive('order')} className={`${active==='order'? 'sidebar-active':''} option`}>
            <BsBox2/>
            <h3>Orders</h3>
          </NavLink>

        
       
      </div>
    
    </div>
  )
}

export default SideBar