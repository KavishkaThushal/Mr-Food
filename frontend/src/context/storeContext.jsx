import { createContext, useEffect, useState } from "react";
import { foodList } from "../assets/data";

export const StoreContext = createContext(null);

const StoreProvider = (props) => {
const [cardItems, setCardItems] = useState({})
  
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

    const contextValue = {
        foodList,
        cardItems,
        addToCart,
        removeFromCart
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