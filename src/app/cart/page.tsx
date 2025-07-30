import { useCart } from "@/context/page";
import { Dialog, DialogTitle } from "@mui/material";
import { toast } from "sonner";

import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { useEffect } from "react";


interface modalProps {
  open: boolean,
  handleClose: () => void
}
export default function CartPageModal({ open, handleClose }: modalProps) {

  const { cartItems, clearCart, removeFromCart, decreaseQty, increaseQty, cartCount, cartTotal } = useCart()

  const handleClick = () => {
    toast.success("Order Placed Successfully!");
    clearCart();
  }

  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems))
  // }, [cartItems])

  // useEffect(() => {
  //   const storedCartItems = localStorage.getItem("cartItems");
  //   if(storedCartItems){
  //     setCartItems(JSON.parse(storedCartItems));
  //   }
  // })

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        fullScreen
        hideBackdrop={false}
        BackdropProps={{
          style: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
        PaperProps={{
          sx: {
            width: "29rem",


            height: "100vh",      // full viewport height
            margin: 0,
            right: 0,
            top: 0,
            bottom: 0,
            position: "fixed",
            borderRadius: 0,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          },
        }}
        sx={{
          '& .MuiDialog-container': {
            height: '100vh',           // make container full height
            alignItems: 'flex-start',  // stick to top
            justifyContent: 'flex-end' // stick to right
          }
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-1xl font-bold flex items-center gap-2">
              <FiShoppingCart className="text-amber-500" />
              Shopping Cart ({cartCount} {cartCount === 1 ? "item" : "items"})
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-red-500 text-xl"
            >
              ×
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-4">
  {cartItems.length === 0 ? (
    <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center">
      <FiShoppingCart className="text-4xl mb-2" />
      <p>Your cart is empty</p>
      <p>Add some delicious cakes to get started</p>
    </div>
  ) : (
    <div className="flex flex-col gap-4">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-row items-center justify-between shadow-md rounded-lg p-3"
        >
          <div className="flex items-center gap-3">
            <img
              src={item.image}
              className="rounded object-cover h-[60px] w-[60px]"
            />
            <div className="flex flex-col">
              <span className="font-medium text-[12px] md:text-sm">{item.name}</span>
              <span className="text-sm text-gray-500">${item.price}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button
              className="px-2 cursor-pointer border rounded"
              onClick={() => decreaseQty(item.id)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="cursor-pointer px-2 border rounded"
              onClick={() => increaseQty(item.id)}
            >
              +
            </button>
            <button>
              <FiTrash2
                className="cursor-pointer text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(item.id)}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>


          {/* Footer */}
          <div className="border-t p-4 space-y-2">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${cartTotal}</span>
            </div>
            <button className="w-full cursor-pointer bg-amber-500 text-white py-2 rounded hover:bg-amber-600" onClick={handleClick}>
              Checkout - ${cartTotal}
            </button>
            <button className="w-full border cursor-pointer py-2 rounded hover:bg-gray-100" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </Dialog>




    </>
  )
}


