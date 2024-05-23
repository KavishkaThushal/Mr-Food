import { createContext, useEffect, useState } from "react";
import { foodList } from "../assets/data";

export const StoreContext = createContext(null);

const StoreProvider = (props) => {
const [cardItems, setCardItems] = useState({})
const [Token, setToken] = useState('')
  
  const addToCart = (itmeId) => {
    if(!cardItems[itmeId]){
        setCardItems(prev=>({...prev,[itmeId]:1}))
  } else{
      setCardItems(prev=>({...prev,[itmeId]:prev[itmeId]+1}))
  }
}

const removeFromCart = (itmeId) => {
    setCardItems(prev=>({...prev,[itmeId]:prev[itmeId]-1}))
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
    
    useEffect(() => {
        console.log(cardItems);
        
    }, [cardItems])
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreProvider