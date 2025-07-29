'use client'
import {createContext, useContext, useState, ReactNode} from 'react'
import {cartItem, cartContextType} from '@/const/cart'

const CartContext  = createContext<cartContextType | null>(null)

/**
 * The CartProvider component wraps the components that need access to the
 * cartContext. It provides a state of an empty array of cart items and
 * functions to update the state (add to cart, increase quantity, decrease
 * quantity, remove from cart, and clear cart).
 * @param {{children: ReactNode}} param0 - The components that need access to
 * the cartContext.
 * @returns {JSX.Element} - The components wrapped in the cartContext Provider.
 */
export const CartProvider = ({children}: {children: ReactNode}) => {

    const [cartItems, setCartItems] = useState<cartItem[]>([])
    const addToCart = (item: cartItem) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem){
                return prevItems.map((i) => 
                    i.id === item.id
                    ? {...i, quantity: i.quantity + item.quantity}
                    : i

                )
            }
            return [...prevItems, {...item, quantity: item.quantity || 1}];

        })



    }
    const increaseQty = (id: string) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
            item.id === item.id
                ?{...item, quantity: item.quantity + 1}
                : item
            )
        })

    }
    const decreaseQty = (id: string) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
            item.id === item.id
                ?{...item, quantity: Math.max(1, item.quantity - 1 ) }
                : item
            )
        })

    }
    // Remove item if quantity is 0
    const removeFromCart = (id: string) => {
    setCartItems((prevItems) => 
    prevItems.filter((item) => item.id !== id))

    }




    const clearCart = () => {
        setCartItems([])
    }

    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

    const isInCart = (id: string) => cartItems.some((item) => item.id === id);


    

 return(
        <CartContext.Provider
         value={{
                cartItems,
                addToCart,
                increaseQty,
                decreaseQty,
                removeFromCart,
                clearCart,
                cartTotal,
                cartCount,
                isInCart,
            }}
        
        >

           
           {children}
         </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if(!context){
        throw new Error("useCart must be used within a CartProvider")
    }
    return context;
}



