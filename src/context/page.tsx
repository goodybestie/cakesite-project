'use client'
import {createContext, useContext, useState, ReactNode, useEffect} from 'react'
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
    const [isLoading, setIsLoading] = useState(false) // [isLoading, setIsLoading]
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

useEffect(() => {
    if (isLoading){
        localStorage.setItem("cartItems", JSON.stringify(cartItems))

    }
}, [cartItems, isLoading])

useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if(storedItems){
         setCartItems(JSON.parse(storedItems))
    }
    setIsLoading(true);
},[])

    /**
     * Increases the quantity of an item in the cart by 1.
     * @param {string} id - The id of the item to increase.
     */
    const increaseQty = (id: string) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
            item.id === id
                ?{...item, quantity: item.quantity + 1}
                : item
            )
        })

    }
    const decreaseQty = (id: string) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
            item.id === id
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

    const toggleLiked = (id: string) => {
    setCartItems((prevItems) =>
        prevItems.map((item) =>
            item.id === id
                ? { ...item, isLiked: !item.isLiked }
                : item
        )
    );
};


    const isLiked = (id: string) => {
        const item = cartItems.find((item) => item.id === id)
        return item?.isLiked ?? false; 
    }

    

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
                toggleLiked,
                isLiked,
                
               
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



