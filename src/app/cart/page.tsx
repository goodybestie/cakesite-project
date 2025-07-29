import { useCart } from "@/context/page";
import { Dialog, DialogTitle } from "@mui/material";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";


interface modalProps{
    open: boolean,
    handleClose: () => void
}
export default function CartPageModal({open, handleClose}: modalProps){
    
const { removeFromCart, decreaseQty, increaseQty, cartCount} = useCart()


return(
<>
<Dialog
  open={open}
  onClose={handleClose}
  maxWidth={false}
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


      {/* Map cart items here */}
    </div>

    {/* Footer */}
    <div className="border-t p-4 space-y-2">
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>$120.00</span>
      </div>
      <button className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600">
        Checkout - $120.00
      </button>
      <button className="w-full border py-2 rounded hover:bg-gray-100">
        Clear Cart
      </button>
    </div>
  </div>
</Dialog>




</>
)
}


