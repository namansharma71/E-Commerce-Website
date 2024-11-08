import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null);

let cart = {};
for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
}


const ShopContextProvider = (props) => {
    const [cartItem, setCartItems] = useState(cart);
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItem);
    }
    const removeToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItem[item];
            }
            return totalAmount;
        }
    }

    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItem+=cartItem[item];
            }
        }
        return totalItem;
    }
    const contextValue = {getTotalCartItems,getTotalCartAmount, all_product, cartItem, addToCart, removeToCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;