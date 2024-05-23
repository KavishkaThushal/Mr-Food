import { createContext, useEffect, useState } from "react";

import axios from 'axios'
export const StoreContext = createContext(null);

const StoreProvider = (props) => {
const [cardItems, setCardItems] = useState({})
const [foodList, setFoodList] = useState([])
const [Token, setToken] = useState('')
 const token=localStorage.getItem('token') 

 const loadCartItems=async()=>{
    const response=await axios.get('http://localhost:7001/api/cart/show-cart'
    ,{
        headers:{
            authorization:token
        }
    })
    setCardItems(response.data.data)
}

useEffect(() => {
    const fetchFoodList = async () => {
        try {
            const response = await axios.get('http://localhost:7001/api/food/show-list')
            if(response.data.success===true){
             
                setFoodList(response.data.data)
            }
           
        } catch (error) {
            console.log(error);
        }
       
    }
    fetchFoodList()
    loadCartItems()
    
}, [])

  const addToCart = (itmeId) => {
    if(!cardItems[itmeId]){
        setCardItems(prev=>({...prev,[itmeId]:1}))
  } else{
      setCardItems(prev=>({...prev,[itmeId]:prev[itmeId]+1}))
  }

  if(token){
  
    try {
        axios.post('http://localhost:7001/api/cart/add-item',{
        itemId:itmeId,
    },{
        headers:{
            authorization:token
        }
    })
    } catch (error) {
        console.log(error);
    }
    
  }
}



const removeFromCart = (itmeId) => {
    setCardItems(prev=>({...prev,[itmeId]:prev[itmeId]-1}))

    if(token){
  
        try {
            axios.post('http://localhost:7001/api/cart/remove-item',{
            itemId:itmeId,
        },{
            headers:{
                authorization:token
            }
        })
        } catch (error) {
            console.log(error);
        }
        
      }
}
const getTotalAmount=()=>{
    let total=0;
    for(const cartItem in cardItems){
        if(cardItems[cartItem]>0){
            const item=foodList.find((item)=>item._id===cartItem)
            total+=item.price*cardItems[cartItem]
        }
    }
    return total;
}
   
    const contextValue = {
        foodList,
        cardItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        setToken,
        Token,
    }
    
   
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreProvider