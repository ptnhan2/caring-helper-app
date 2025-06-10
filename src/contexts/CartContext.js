import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    // Thêm sản phẩm vào giỏ
    const addToCart = (product) => {
        setCartItems((prev)=> {
            const existing = prev.find((item)=>item.id === product.id);
            if(existing){
                return prev.map((item)=> 
                item.id === product.id 
                ? {...item, quantity: item.quantity + 1}
                : item
                );
            }
            return [...prev, {...product, quantity:1}];
        });
    };

    //Xoá sản phẩm khỏi giỏ
    const removeFromCart = (productId) => {
        setCartItems((prev)=>prev.filter((item)=>item.id !== productId))
    };

    // Cập nhật số lượng
    const updateQuantity = (productId, quantity) => {
        setCartItems((prev)=>prev.map((item)=>item.id===productId ? {...item, quantity} : item));
        
        //setCartItems((prev)=> prev.map((item)=> item.id === productId ? {...item, quantity}: item))
    };

    //Reset giỏ hàng
    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider
        value = {{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}